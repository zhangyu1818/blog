import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

export const formatDate = (date: string, lang: string) =>
  dayjs(date).locale(lang).format('MMM DD, YYYY')

export { parseMarkdown } from './markdown'

export * from './lang'
