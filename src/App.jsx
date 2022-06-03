import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { PrivateRoute } from './Page/PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './Firebase/context';

export default function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path='/'
          element={!user ? <Login /> : <Navigate to={'/dashboard'} replace />}
        />
        <Route
          path='login'
          element={!user ? <Login /> : <Navigate to={'/dashboard'} replace />}
        />
        <Route path='*' element={'404 Not found'} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/history' element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
