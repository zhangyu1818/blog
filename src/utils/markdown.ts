import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeStringify from 'rehype-stringify'
import { selectAll, select } from 'hast-util-select'
import { s } from 'hastscript'

import rehypeStarryNight from './rehypeSarryNight'

export const parseMarkdown = (markdown: string, autolink: boolean = true) => {
  let t = unified().use(remarkParse).use(remarkGfm).use(remarkRehype)
  if (autolink) {
    t = t
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: {
          className: 'heading-link',
        },
      })
      .use(() => tree => {
        selectAll('.heading-link', tree).forEach(node => {
          node.children.push(
            s(
              'svg',
              {
                class: 'octicon octicon-link',
                viewBox: '0 0 16 16',
                fill: 'currentColor',
                'aria-hidden': 'true',
                version: '1.1',
                width: '16',
                height: '16',
              },
              s('path', {
                d: 'm7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z',
              }),
            ),
          )
        })
      })
  }
  return t.use(rehypeStarryNight).use(rehypeAccessibleEmojis).use(rehypeStringify).process(markdown)
}
