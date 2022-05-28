import { createRoot } from 'react-dom/client';
import React from 'react';
import { StrictMode } from 'react';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Historic from './Page/HIstoric';
import Dashboard from './Page/Dashboard';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='dashboard' element={<Historic />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
