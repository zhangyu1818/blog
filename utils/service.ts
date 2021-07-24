import { graphql, request } from './request'

import { RepositoryFile, RepositoryIssue, RepositoryIssues } from '../types/interface'

export const REPO_OWNER = 'zhangyu1818'
export const REPO_NAME = 'blog'

// GraphQL API

export const queryPostsFromIssues = () =>
  graphql<RepositoryIssues>(
    `
      query queryPostsFromIssues($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          issues(
            states: CLOSED
            first: 100
            orderBy: { field: CREATED_AT, direction: DESC }
            filterBy: { createdBy: $owner }
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
    `,
    {
      owner: REPO_OWNER,
      name: REPO_NAME,
    }
  )

export const queryPostsByLabel = (label: string[]) =>
  graphql<RepositoryIssues>(
    `
      query queryIssuesByLabel($label: [String!], $owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
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
      owner: REPO_OWNER,
      name: REPO_NAME,
    }
  )

export const queryPostByNumber = (number: number) =>
  graphql<RepositoryIssue>(
    `
      query queryIssueByNumber($number: Int!, $owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          issue(number: $number) {
            number
            title
            url
            createdAt
            bodyHTML
            labels(first: 5) {
              nodes {
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
      owner: REPO_OWNER,
      name: REPO_NAME,
    }
  )

// this is another repo query
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
  )

// Rest API

export const renderMarkdown = (text: string) =>
  request('POST /markdown', {
    text,
  })

// mix

export const renderProfileMarkdown = () =>
  queryProfileREADME().then(({ repository: { object: { text } } }) => renderMarkdown(text))
