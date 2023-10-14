import 'dotenv/config'

import { Octokit } from '@octokit/core'

if (process.env.MIGRATE !== 'true') {
  console.log(
    'Make sure you want to migrate the first 100 issues to discussions by setting MIGRATE=true in your environment variables.'
  )
  process.exit(0)
}

const name = 'blog'
const owner = 'zhangyu1818'
const repositoryId = 'MDEwOlJlcG9zaXRvcnkzMjk0OTk1NjU='
const categoryId = 'DIC_kwDOE6PDrc4CaH_i'

const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN })

try {
  const {
    repository: {
      issues: { nodes: posts },
    },
  } = await graphql(
    `
      query queryPostsFromIssues($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          issues(
            states: CLOSED
            first: 100
            orderBy: { field: CREATED_AT, direction: ASC }
            filterBy: { createdBy: $owner }
          ) {
            nodes {
              title
              body
              labels(first: 5) {
                nodes {
                  id
                }
              }
            }
          }
        }
      }
    `,
    { owner, name }
  )

  const {
    repository: {
      discussions: { nodes: discussions },
    },
  } = await graphql(`
    query {
      repository(owner: "zhangyu1818", name: "blog") {
        discussions(first: 100) {
          nodes {
            id
            title
          }
        }
      }
    }
  `)

  for (const post of posts) {
    const { title, body, labels } = post
    const {
      createDiscussion: { discussion },
    } = await graphql(
      `
        mutation createDiscussion($input: CreateDiscussionInput!) {
          createDiscussion(input: $input) {
            discussion {
              id
            }
          }
        }
      `,
      {
        input: {
          repositoryId,
          categoryId,
          title,
          body,
        },
      }
    )

    console.log(`${title}`)

    await wait()

    const labelIds = labels.nodes.map(label => label.id)
    if (!labelIds.length) {
      continue
    }

    await graphql(
      `
        mutation addLabel($input: AddLabelsToLabelableInput!) {
          addLabelsToLabelable(input: $input) {
            clientMutationId
          }
        }
      `,
      {
        input: {
          labelableId: discussion.id,
          labelIds,
        },
      }
    )
    await wait()
  }
} catch (e) {
  console.error(e)
}

function wait() {
  return new Promise(resolve => setTimeout(resolve, 1000))
}
