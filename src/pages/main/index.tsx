import React, { useState } from 'react'
import getDateTime from '../../util/getDateTime'
import styles from './index.less'

export default () => {
  const [day, setDate] = useState(getDateTime())
  return (
    <div className={`test ${styles.main} `} onClick={() => setDate(getDateTime())}>
      这是第一个日期时间: {day}
    </div>
  )
}