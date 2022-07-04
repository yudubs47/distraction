import React from 'react'
import Main from './src/pages/main'
import About from './src/pages/about'
import './src/pages/other'
import imgUrl from './src/assets/img/icon.png'
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