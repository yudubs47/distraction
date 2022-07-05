import React, { useState } from 'react'
import Nav from '@/components/Nav'
import getDateTime from '@/util/getDateTime'
import styles from './index.less'

export default () => {
  const [day, setDate] = useState(getDateTime())
  return (
    <>
      <Nav />
      <div className={`test ${styles.main} `} onClick={() => setDate(getDateTime())}>
        main日期时间: {day}
      </div>
    </>
  )
}