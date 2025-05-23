import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Đây là nơi khai báo cấu trúc chính trang web của Reactjs
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**
   * Chương trình mặc định
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();