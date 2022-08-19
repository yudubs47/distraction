import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Provider from './src/components/CommonState'

import routers from './routers'

export default () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {
            routers.map(({ path, Component, isIndex }) => (
              <Route key={path} index={isIndex} path={path} element={<Component />} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}