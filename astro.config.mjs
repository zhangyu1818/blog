import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import prefetch from '@astrojs/prefetch'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://zhangyu.dev',
  integrations: [tailwind(), sitemap(), prefetch(), robotsTxt()],
})
