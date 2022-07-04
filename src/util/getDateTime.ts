import dayjs from 'dayjs'
// type getDateTime = () => string
const getDateTime = () => dayjs().format('YYYY-MM-DD HH:mm:ss')

export default getDateTime
