export interface Repository<T> {
  repository: T
}

export interface Discussions {
  nodes: DiscussionContent[]
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
  totalCount: number
}

export interface DiscussionContent {
  number: number
  title: string
  createdAt: string
  updatedAt: string
  labels: Labels
  url: string
  body?: string
  bodyHTML?: string
}

export type RepositoryDiscussions = Repository<{ discussions: Discussions }>

export interface PinnedItems {
  user: {
    pinnedItems: {
      nodes: PinnedItemContent[]
    }
  }
}

export interface PinnedItemContent {
  name: string
  url: string
  description: string
  homepageUrl: string
  stargazerCount: number
  forkCount: number
  visibility: 'PUBLIC'
  languages: Labels
}

export interface Label {
  name: string
  color: string
}

export interface Labels {
  nodes: Label[]
}

export type RepositoryFile = Repository<{ object: { text: string } }>

export type RepositoryLabels = Repository<{ labels: Labels }>

export type Search = { search: Discussions }

// Categories
export interface DiscussionCategory {
  id: string
  name: string
}
export interface DiscussionCategories {
  nodes: DiscussionCategory[]
}

export type RepositoryDiscussionCategories = Repository<{
  discussionCategories: DiscussionCategories
}>
