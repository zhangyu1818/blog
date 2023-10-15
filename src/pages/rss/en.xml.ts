import rss from '@astrojs/rss'

import { repoOwner } from 'blogConfig'

import { queryDiscussions } from '@services'

export const get = async (context: any) => {
  const discussions = await queryDiscussions({ lang: 'en', bodyHTML: true })

  return rss({
    title: repoOwner,
    description: 'A blog about front-end development and programming.',
    site: context.site,
    items: discussions!.map(node => ({
      link: `/post/${node.number}`,
      title: node.title,
      pubDate: new Date(node.createdAt),
      content: node.bodyHTML,
    })),
    customData: '<language>en-us</language>',
    stylesheet: '../rss-style.xsl',
  })
}
