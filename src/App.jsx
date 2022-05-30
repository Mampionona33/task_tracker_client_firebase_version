import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import History from './Page/History';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='history' element={<History />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
