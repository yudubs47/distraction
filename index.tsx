import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.global.less' // 不会模块化的全局样式
import App from './App'


ReactDOM.createRoot(document.getElementById('app')).render(<App />);