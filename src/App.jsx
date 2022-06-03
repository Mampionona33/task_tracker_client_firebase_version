import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
