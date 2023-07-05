/**
 * https://github.com/wooorm/starry-night#example-integrate-with-unified-remark-and-rehype
 */
import { all, createStarryNight } from '@wooorm/starry-night'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'

import type { Plugin } from 'unified'

/**
 * Plugin to highlight code with `starry-night`.
 */
const rehypeStarryNight: Plugin = () => {
  const starryNightPromise = createStarryNight(all)
  const prefix = 'language-'

  return async function (tree: any) {
    const starryNight = await starryNightPromise

    visit(tree, 'element', function (node, index, parent) {
      if (!parent || index === null || node.tagName !== 'pre') {
        return
      }

      const head = node.children[0]

      if (!head || head.type !== 'element' || head.tagName !== 'code' || !head.properties) {
        return
      }

      const classes = head.properties.className

      if (!Array.isArray(classes)) return

      const language = classes.find((d: unknown) => typeof d === 'string' && d.startsWith(prefix))

      if (typeof language !== 'string') return

      const scope = starryNight.flagToScope(language.slice(prefix.length))

      // Maybe warn?
      if (!scope) return

      const fragment = starryNight.highlight(toString(head), scope)
      const children = fragment.children

      parent.children.splice(index, 1, {
        type: 'element',
        tagName: 'div',
        properties: {
          className: [
            'highlight',
            'highlight-' + scope.replace(/^source\./, '').replace(/\./g, '-'),
          ],
        },
        children: [
          {
            type: 'element',
            tagName: 'pre',
            children,
          },
        ],
      })
    })
  }
}

export default rehypeStarryNight
