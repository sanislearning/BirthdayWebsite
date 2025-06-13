// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cute from './pages/cute';
import Pro from './pages/pro';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pro" />} />
        <Route path="/cute" element={<Cute />} />
        <Route path="/pro" element={<Pro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
