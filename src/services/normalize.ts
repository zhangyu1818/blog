import type {
  RepositoryDiscussions,
  RepositoryDiscussionCategories,
  RepositoryLabels,
} from './interface'

// normalize RepositoryDiscussionCategories and return nodes
export const normalizeDiscussionCategories = (categories: RepositoryDiscussionCategories) =>
  categories.repository.discussionCategories.nodes

// normalize RepositoryDiscussions and return nodes
export const normalizeDiscussions = (discussions: RepositoryDiscussions) =>
  discussions.repository.discussions.nodes

// normalize RepositoryLabels and return nodes
export const normalizeLabels = (labels: RepositoryLabels) => labels.repository.labels.nodes
