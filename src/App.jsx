import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { PrivateRoute } from './Page/PrivateRoute';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './Firebase/context';
import { LogginRedirect } from './Page/LogginRedirect';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='history' element={<History />} />
        <Route path='*' element={'404 Not found'} />
      </Routes>
    </BrowserRouter>
  );
}
