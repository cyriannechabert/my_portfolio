import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 1. Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 2. Wrap your App component with it */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);