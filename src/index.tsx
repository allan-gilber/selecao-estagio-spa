import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/application/App';
import 'antd/dist/antd.min.css';


const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);