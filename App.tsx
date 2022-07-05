import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import routers from './routers'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routers.map(({ path, Component, isIndex }) => (
            <Route key={path} index={isIndex} path={path} element={<Component />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}