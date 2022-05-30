import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from './Page/Dashboard';
import History from './Page/History';
import Login from './Page/Login';
import { auth } from './Firebase';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }, []);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Dashboard />} />
        <Route path='history' element={<History />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
