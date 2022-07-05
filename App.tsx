import React from 'react'
import Main from '@/pages/main'
import About from '@/pages/about'
import '@/pages/other'
import imgUrl from '@/assets/img/icon.png'
export default () => {
  return (
    <div className='front'>
      这是一行字哈哈哈哈
      <img src={imgUrl} alt="" />
      <Main />
      <About />
    </div>
  )
}