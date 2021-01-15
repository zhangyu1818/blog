import dayjs from 'dayjs'

const formatDate = (date: string, template = 'YYYY年 M月D日') => dayjs(date).format(template)

export default formatDate
