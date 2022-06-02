import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { PrivateRoute } from './Page/PrivateRoute';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './Firebase/context';
import { LogginRedirect } from './Page/LogginRedirect';
import { ConditionalHomePage } from './Page/ConditionalHomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ConditionalHomePage />} />
        <Route exact path='login' element={<Login />} />
        <Route
          path='dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='history'
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path='*' element={'404 Not found'} />
      </Routes>
    </BrowserRouter>
  );
}
