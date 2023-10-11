import rss from '@astrojs/rss'

import { repoOwner } from 'blogConfig'

import { queryPostsFromIssues } from '@services'

export const get = async (context: any) => {
  const {
    repository: {
      issues: { nodes },
    },
  } = await queryPostsFromIssues({ withHtml: true })

  return rss({
    title: repoOwner,
    description: '一个关于前端开发和编程的博客。',
    site: context.site,
    items: nodes.map(node => ({
      link: `/post/${node.number}`,
      title: node.title,
      pubDate: new Date(node.createdAt),
      content: node.bodyHTML,
    })),
    stylesheet: '/rss-style.xsl',
  })
}
