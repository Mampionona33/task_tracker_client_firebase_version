import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import History from './Page/History';

export default function App() {
  return (
    <Routes>
      <p>test</p>
      <Route path='/' element={<Navigate to='dashboard' />} />
      <Route path='history' element={<History />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  );
}
