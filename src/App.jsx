import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { PrivateRoute } from './Page/PrivateRoute';
import { useContext } from 'react';
import { AuthContext, AuthProvider, useUserAuth } from './Firebase/context';
import { LogginRedirect } from './Page/LogginRedirect';
import { ConditionalHomePage } from './Page/ConditionalHomePage';

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ConditionalHomePage />} />
        <Route exact path='login' element={<Login />} />
        <Route path='*' element={'404 Not found'} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
