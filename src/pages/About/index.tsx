import React, { useState } from 'react'
import Nav from '@/components/Nav'
import getDateTime from '@/util/getDateTime'

export default () => {
  const [day, setDate] = useState(getDateTime())
  return (
    <>
      <Nav />
      <div onClick={() => setDate(getDateTime())}>
        about日期时间: {day}
      </div>
    </>
  )
}