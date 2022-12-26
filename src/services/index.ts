import { Octokit } from '@octokit/core'

import type { RepositoryIssues, RepositoryFile } from './interface'

const REPO_OWNER = 'zhangyu1818'
const REPO_NAME = 'blog'

const { graphql, request } = new Octokit({ auth: import.meta.env.GITHUB_TOKEN })

type QueryParams = {
  withContent: boolean
  cursor?: string
}

export const queryPostsFromIssues = ({ withContent, cursor }: QueryParams) =>
  graphql<RepositoryIssues>(
    `
      query queryPostsFromIssues($owner: String!, $name: String!, $withContent: Boolean!, $cursor: String) {
        repository(owner: $owner, name: $name) {
          issues(
            states: CLOSED
            first: 100
            orderBy: { field: CREATED_AT, direction: DESC }
            filterBy: { createdBy: $owner }
            after: $cursor
          ) {
            nodes {
              number
              title
              createdAt
              updatedAt
              url
              bodyHTML @include(if: $withContent)
              labels(first: 5) {
                nodes {
                  color
                  name
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
            totalCount
          }
        }
      }
    `,
    {
      owner: REPO_OWNER,
      name: REPO_NAME,
      withContent,
      cursor,
    }
  )

export const queryProfileREADME = () =>
  graphql<RepositoryFile>(
    `
      query queryProfileREADME($owner: String!) {
        repository(owner: $owner, name: $owner) {
          object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    `,
    {
      owner: REPO_OWNER,
    }
  ).then(
    ({
      repository: {
        object: { text },
      },
    }) =>
      request('POST /markdown', {
        text,
      })
  )
