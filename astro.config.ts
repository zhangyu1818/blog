import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://www.zhangyu.dev/',
  integrations: [tailwind(), sitemap(), robotsTxt()],
})
