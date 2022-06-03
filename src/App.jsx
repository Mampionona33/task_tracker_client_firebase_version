import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { UserContext } from './Firebase/context';
import ProtectedRoute from './Page/ProtectedRoute';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const { user } = useContext(UserContext);
  const [isUser, setIsUser] = useState(null);
  const isUserLogged = localStorage.getItem('isLoggeIn');

  useEffect(() => {
    if (isUserLogged) {
      setIsUser(true);
    }
  }, []);

  console.log(isUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={!isUser ? <Login /> : <Dashboard />} />
          <Route path='login' element={!isUser ? <Login /> : <Dashboard />} />
          <Route
            element={<ProtectedRoute user={user} isUserLogged={isUserLogged} />}
          >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
