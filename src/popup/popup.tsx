import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';
import PopupApp from './PopupApp';
import AllContextProvider from '../context/AllContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('popup-root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <PopupApp />
  </React.StrictMode>
);

