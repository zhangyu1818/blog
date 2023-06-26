import dayjs from 'dayjs'

export const formatDate = (date: string) => dayjs(date).format('MMM DD, YYYY')

export { parseMarkdown } from './markdown'
