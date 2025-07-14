import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './app';
import { WalletProvider } from './context/WalletContext'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletProvider>
      <App/>
  </WalletProvider>
  </React.StrictMode>
);
