import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import History from './History';

export default function Contents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/history' element={<History />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
