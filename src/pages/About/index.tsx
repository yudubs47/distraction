import React, { useState, useContext } from 'react'
import Nav from '@/components/Nav'
import getDateTime from '@/util/getDateTime'
import { CommonContext } from '@/components/CommonState'

export default () => {
  const [day, setDate] = useState(getDateTime())
  const [{ color }, update] = useContext(CommonContext)
  return (
    <>
      <Nav />
      <div
        style={{ color }}
        onClick={() => {
          setDate(getDateTime())
          update({
            type: 'color',
            data: pre => pre.color === '#000000' ? '#cccccc' : '#000000'
          })
        }}
      >
        about日期时间: {day}
      </div>
    </>
  )
}