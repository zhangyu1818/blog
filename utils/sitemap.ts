interface SitemapItem {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: string
  mobile?: string
}

const xmlTemplate = () => `<?xml version="1.0" encoding="UTF-8"?>`
const urlsetTemplate = (children: string) =>
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.baidu.com/schemas/sitemap-mobile/1/">${children}</urlset>`

export const sitemapItem = (item: SitemapItem) => {
  let str = `<url>`
  Object.entries(item).forEach(([key, value]) => {
    if (value) {
      if (key === 'mobile') {
        str += `<mobile:mobile type="${value}"/>`
      } else {
        str += `<${key}>${value}</${key}>`
      }
    }
  })
  str += `</url>`
  return str
}

export const sitemap = (sitemapItem: string[]) => {
  let template = xmlTemplate()
  let content = urlsetTemplate(sitemapItem.join(''))
  return template + content
}
