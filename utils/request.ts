import { Octokit } from '@octokit/core'
const { graphql, request } = new Octokit({ auth: process.env.GITHUB_TOKEN })

export { graphql, request }
