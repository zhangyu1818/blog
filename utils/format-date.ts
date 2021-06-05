import dayjs from 'dayjs'

const formatDate = (date: string, template = 'MMM DD, YYYY') => dayjs(date).format(template)

export default formatDate
