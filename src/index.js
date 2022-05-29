import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import History from './Page/History';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='history' element={<History/>} />
    </Routes>
  </BrowserRouter>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
