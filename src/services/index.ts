import { Octokit } from '@octokit/core'
import { repoName, repoOwner } from 'blogConfig'

import type {
  RepositoryIssues,
  RepositoryFile,
  RepositoryLabels,
  RepositoryLabelIssues,
  PinnedItems,
} from './interface'

const { graphql } = new Octokit({ auth: import.meta.env.GITHUB_TOKEN })

type IssuesQueryParams = {
  first?: number
  withContent?: boolean
  withHtml?: boolean
  cursor?: string
}

type LabelQueryParams = {
  label: string
  first?: number
  cursor?: string
}

export const queryPostsFromIssues = ({
  first = 100,
  withContent = false,
  withHtml = false,
  cursor,
}: IssuesQueryParams) =>
  graphql<RepositoryIssues>(
    `
      query queryPostsFromIssues(
        $first: Int!
        $owner: String!
        $name: String!
        $withContent: Boolean!
        $withHtml: Boolean!
        $cursor: String
      ) {
        repository(owner: $owner, name: $name) {
          issues(
            states: CLOSED
            first: $first
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
              body @include(if: $withContent)
              bodyHTML @include(if: $withHtml)
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
      first,
      owner: repoOwner,
      name: repoName,
      withContent,
      withHtml,
      cursor,
    }
  )

export const queryProfileREADME = (lang: string = '') =>
  graphql<RepositoryFile>(
    `
      query queryProfileREADME($owner: String!, $file: String!) {
        repository(owner: $owner, name: $owner) {
          object(expression: $file) {
            ... on Blob {
              text
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
      file: 'master:' + (lang ? `README.${lang}.md` : 'README.md'),
    }
  )

export const queryPinnedItems = () =>
  graphql<PinnedItems>(
    `
      query queryPinnedItems($owner: String!) {
        user(login: $owner) {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                url
                description
                homepageUrl
                visibility
                stargazerCount
                forkCount
                languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
    }
  )

export const queryAllLabels = () =>
  graphql<RepositoryLabels>(
    `
      query queryAllLabels($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          labels(first: 100, orderBy: { field: NAME, direction: ASC }) {
            nodes {
              name
              issues(first: 100) {
                nodes {
                  number
                }
              }
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
      name: repoName,
    }
  )
    // sort
    .then(res => {
      const {
        repository: {
          labels: { nodes },
        },
      } = res
      nodes.sort((a, b) => (a.issues!.nodes.length > b.issues!.nodes.length ? -1 : 1))
      return res
    })

export const queryPostsFromLabel = ({ label, first = 100, cursor }: LabelQueryParams) =>
  graphql<RepositoryLabelIssues>(
    `
      query queryPostsFromLabel(
        $label: String!
        $first: Int!
        $owner: String!
        $name: String!
        $cursor: String
      ) {
        repository(owner: $owner, name: $name) {
          label(name: $label) {
            name
            issues(
              states: CLOSED
              first: $first
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
      }
    `,
    {
      label,
      first,
      cursor,
      name: repoName,
      owner: repoOwner,
    }
  )
