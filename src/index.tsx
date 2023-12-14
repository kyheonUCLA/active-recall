import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllContextProvider from './context/AllContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>
);

