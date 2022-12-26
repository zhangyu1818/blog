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

export interface Label {
  name: string
  color: string
}

export interface Labels {
  nodes: Label[]
}

export type RepositoryIssues = Repository<{ issues: Issues }>

export type RepositoryFile = Repository<{ object: { text: string } }>
