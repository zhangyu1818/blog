import graphql from './graphql'

import { RepositoryIssue, RepositoryIssues } from '../types/interface'

export const REPO_OWNER = 'zhangyu1818'
export const REPO_NAME = 'blog'

export const queryPostsFromIssues = () =>
  graphql<RepositoryIssues>(`
    {
      repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
        issues(
          states: CLOSED
          first: 100
          orderBy: { field: CREATED_AT, direction: DESC }
          filterBy: { createdBy: "${REPO_OWNER}" }
        ) {
          nodes {
            number
            title
            createdAt
            updatedAt
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
  `)

export const queryPostsByLabel = (label: string[]) =>
  graphql<RepositoryIssues>(
    `
      query queryIssuesByLabel($label: [String!]) {
        repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
          issues(
            states: CLOSED
            first: 100
            labels: $label
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
            nodes {
              number
              title
              createdAt
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
      label,
    }
  )

export const queryPostByNumber = (number: number) =>
  graphql<RepositoryIssue>(
    `
    query queryIssueByNumber($number: Int!) {
      repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
        issue(number: $number) {
          number
          title
          url
          createdAt
          bodyHTML
          labels(first:5) {
            nodes{
              color
              name
            }
          }
        }
      }
    }
  `,
    {
      number,
    }
  )
