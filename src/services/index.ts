import { Octokit } from '@octokit/core'
import { repoName, repoOwner } from 'blogConfig'

import type {
  RepositoryDiscussions,
  RepositoryFile,
  RepositoryLabels,
  RepositoryDiscussionCategories,
  PinnedItems,
  Search,
} from './interface'
import { normalizeDiscussionCategories, normalizeDiscussions, normalizeLabels } from './normalize'

const { graphql } = new Octokit({ auth: import.meta.env.GITHUB_TOKEN })

type DiscussionsQueryParams = {
  categoryId: string
  first?: number
  body?: boolean
  bodyHTML?: boolean
  cursor?: string
}

type SearchQueryParams = {
  query: string
  first?: number
  cursor?: string
}

export const queryPostsFromDiscussions = ({
  first = 100,
  categoryId,
  body = false,
  bodyHTML = false,
  cursor,
}: DiscussionsQueryParams) =>
  graphql<RepositoryDiscussions>(
    /* GraphQL */ `
      query postsFormDiscussions(
        $first: Int!
        $owner: String!
        $name: String!
        $categoryId: ID!
        $body: Boolean!
        $bodyHTML: Boolean!
        $cursor: String
      ) {
        repository(owner: $owner, name: $name) {
          discussions(
            first: $first
            orderBy: { field: CREATED_AT, direction: DESC }
            after: $cursor
            categoryId: $categoryId
          ) {
            nodes {
              number
              title
              createdAt
              updatedAt
              url
              body @include(if: $body)
              bodyHTML @include(if: $bodyHTML)
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
      categoryId,
      body,
      bodyHTML,
      cursor,
    },
  )

export const queryDiscussionCategories = () =>
  graphql<RepositoryDiscussionCategories>(
    /* GraphQL */ `
      query queryDiscussionCategories($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          discussionCategories(first: 100) {
            nodes {
              id
              name
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
      name: repoName,
    },
  )

export const queryProfileREADME = (lang: string = '') =>
  graphql<RepositoryFile>(
    /* GraphQL */ `
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
    },
  )

export const queryPinnedItems = () =>
  graphql<PinnedItems>(
    /* GraphQL */ `
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
    },
  )

export const queryAllLabels = () =>
  graphql<RepositoryLabels>(
    /* GraphQL */ `
      query queryAllLabels($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          labels(first: 100, orderBy: { field: NAME, direction: ASC }) {
            nodes {
              name
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
      name: repoName,
    },
  )

export const queryPostsFromQuery = ({ query, first = 100, cursor }: SearchQueryParams) =>
  graphql<Search>(
    /* GraphQL */ `
      query postsFromLabel($queryStr: String!, $first: Int!, $cursor: String) {
        search(first: $first, type: DISCUSSION, query: $queryStr, after: $cursor) {
          nodes {
            ... on Discussion {
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
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalCount: discussionCount
        }
      }
    `,
    {
      first,
      cursor,
      queryStr: query,
    },
  )

// query cache
const cache = new Map<string, unknown>()

export const queryDiscussionCategoriesWithCache = async () => {
  if (cache.has('discussionCategories')) {
    return cache.get('discussionCategories') as RepositoryDiscussionCategories
  }
  const res = await queryDiscussionCategories()
  cache.set('discussionCategories', res)
  return res
}

export const queryDiscussionsWithCache = async (params: DiscussionsQueryParams) => {
  const { categoryId, ...rest } = params
  const key = JSON.stringify({ categoryId, ...rest })
  if (cache.has(key)) {
    return cache.get(key) as RepositoryDiscussions
  }
  const res = await queryPostsFromDiscussions(params)
  cache.set(key, res)
  return res
}

export const queryAllLabelsWithCache = async () => {
  if (cache.has('labels')) {
    return cache.get('labels') as RepositoryLabels
  }
  const res = await queryAllLabels()
  cache.set('labels', res)
  return res
}

export const queryPostsFromQueryWithCache = async (params: SearchQueryParams) => {
  const { query, ...rest } = params
  const key = JSON.stringify({ query, ...rest })
  if (cache.has(key)) {
    return cache.get(key) as Search
  }
  const res = await queryPostsFromQuery(params)
  cache.set(key, res)
  return res
}

// compose query and normalize

type DiscussionsParams = Omit<DiscussionsQueryParams, 'categoryId'> & { lang: unknown }

export const queryDiscussions = async (params: DiscussionsParams) => {
  const { lang, ...rest } = params
  const categoriesResponse = await queryDiscussionCategoriesWithCache()
  const normalizedCategories = normalizeDiscussionCategories(categoriesResponse)
  const categoryId = normalizedCategories.find(category => category.name === lang)?.id
  if (!categoryId) {
    return null
  }
  const discussionsResponse = await queryDiscussionsWithCache({ ...rest, categoryId })
  return normalizeDiscussions(discussionsResponse)
}

type LabelQueryParams = Omit<SearchQueryParams, 'query'>

export const queryPostsFromAllLabel = async (params?: LabelQueryParams) => {
  params ??= { first: 100 }
  const allLabels = await queryAllLabelsWithCache()
  const normalizedLabels = normalizeLabels(allLabels)
  const labels = normalizedLabels.map(v => v.name)

  const posts = await Promise.all(
    labels.map(label => {
      const query = `repo:${repoOwner}/${repoName} label:"${label}"`
      return new Promise<{
        label: string
        posts: Search
      }>(async resolve => {
        const posts = await queryPostsFromQueryWithCache({ query, ...params })
        resolve({ label, posts })
      })
    }),
  )
  return posts
}

export const queryTopTags = async (lang: string) => {
  const allLabels = await queryAllLabelsWithCache()
  const discussions = await queryDiscussions({ lang, first: 100 })
  const labels = normalizeLabels(allLabels)
  const labelsWithWeight = labels.map(label => {
    const count = discussions!.filter(discussion =>
      discussion.labels.nodes.map(label => label.name).includes(label.name),
    ).length
    return { ...label, count }
  })
  return labelsWithWeight.sort((a, b) => b.count - a.count).filter(label => label.count > 0)
}
