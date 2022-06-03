import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { UserContext } from './Firebase/context';

export default function App() {
  const { user } = useContext(UserContext);
  if (user) {
    console.log(user);
  }

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
