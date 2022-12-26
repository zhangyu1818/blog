import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

export const formatDate = (date: string) => dayjs(date).locale('zh-cn').format('YYYY年M月D日')