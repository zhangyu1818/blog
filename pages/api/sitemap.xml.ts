import type { NextApiRequest, NextApiResponse } from 'next'

import { queryPostsFromIssues } from '../../utils/service'
import { sitemap, sitemapItem } from '../../utils/sitemap'
import formatDate from '../../utils/format-date'

let memorized = { sitemap: '', date: Date.now() }
const isInvalid = () => Date.now() - memorized.date >= 1000 * 3600 * 24 || !memorized.sitemap

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (isInvalid()) {
    const {
      repository: { issues },
    } = await queryPostsFromIssues()
    const posts = issues.nodes

    memorized.sitemap = sitemap(
      posts.map((post) =>
        sitemapItem({
          loc: `https://${req.headers.host}/post/${post.number}`,
          lastmod: formatDate(post.updatedAt, 'YYYY-MM-DD'),
          // mobile: 'pc,mobile',
        })
      )
    )
    memorized.date = Date.now()
  }

  res.setHeader('Content-Type', 'application/xml')
  res.write(memorized.sitemap)
  res.end()
}
