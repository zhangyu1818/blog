import rss from '@astrojs/rss'
import { queryPostsFromIssues } from '../services'

export const get = async () => {
  const {
    repository: {
      issues: { nodes },
    },
  } = await queryPostsFromIssues({ withContent: true })
  return rss({
    title: import.meta.env.REPO_OWNER,
    description: '一个关于前端开发和编程的博客。',
    site: import.meta.env.SITE,
    items: nodes.map(node => ({
      link: `/post/${node.number}`,
      title: node.title,
      pubDate: new Date(node.createdAt),
      content: node.bodyHTML,
    })),
    stylesheet: '/rss-style.xsl',
  })
}
