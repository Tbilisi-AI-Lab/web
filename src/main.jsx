import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import './index.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
