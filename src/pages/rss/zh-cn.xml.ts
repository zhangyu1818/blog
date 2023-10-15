import rss from '@astrojs/rss'

import { repoOwner } from 'blogConfig'

import { queryDiscussions } from '@services'

export const get = async (context: any) => {
  const discussions = await queryDiscussions({ lang: 'zh-cn', bodyHTML: true })

  return rss({
    title: repoOwner,
    description: '一个关于前端开发和编程的博客。',
    site: context.site,
    items: discussions!.map(node => ({
      link: `/zh-cn/post/${node.number}`,
      title: node.title,
      pubDate: new Date(node.createdAt),
      content: node.bodyHTML,
    })),
    customData: '<language>zh-CN</language>',
    stylesheet: '../rss-style.xsl',
  })
}
