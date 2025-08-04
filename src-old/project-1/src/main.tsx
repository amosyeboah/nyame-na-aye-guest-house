import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import WhatsAppFloatingIcon from './components/WhatsAppFloatingIcon';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <WhatsAppFloatingIcon />
  </React.StrictMode>
);