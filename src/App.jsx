import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { PrivateRoute } from './Page/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='history' element={<History />} />
          <Route path='*' element={<Navigate to={<Dashboard />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
