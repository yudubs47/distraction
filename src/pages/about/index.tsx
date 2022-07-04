import React, { useState } from 'react'
import getDateTime from '../../util/getDateTime'

export default () => {
  const [day, setDate] = useState(getDateTime())
  return (
    <div onClick={() => setDate(getDateTime())}>
      这是第二个日期时间: {day}
    </div>
  )
}