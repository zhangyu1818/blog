import { graphql } from '@octokit/graphql'

const graphqlWithToken = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
})

export default graphqlWithToken
