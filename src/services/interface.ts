export interface Repository<T> {
  repository: T
}

export interface Issues {
  nodes: IssueContent[]
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
  totalCount: number
}

export interface IssueContent {
  number: number
  title: string
  createdAt: string
  updatedAt: string
  labels: Labels
  url: string
  bodyHTML?: string
}

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

export interface LabelsWithIssues {
  nodes: (Label & {
    issues?: {
      nodes: { number: number }[]
    }
  })[]
}

export type RepositoryIssues = Repository<{ issues: Issues }>

export type RepositoryFile = Repository<{ object: { text: string } }>

export type RepositoryLabels = Repository<{
  labels: LabelsWithIssues
}>

export type RepositoryLabelIssues = Repository<{
  label: { name: string; issues: Issues }
}>
