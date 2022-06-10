import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { UserContext } from './Firebase/context';
import ProtectedRoute from './Page/ProtectedRoute';
import './styles/App.scss';
import Navbar from './Components/Navbar';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const isUserLogged = localStorage.getItem('taskTrackerUserisLoggeIn');

  return (
    <AnimatePresence exitBeforeEnter>
      {isUserLogged && <Navbar />}
      <Routes location={location} key={location.key}>
        <Route index element={!isUserLogged ? <Login /> : <Dashboard />} />
        <Route
          path='login'
          element={!isUserLogged ? <Login /> : <Dashboard />}
        />
        <Route
          element={<ProtectedRoute user={user} isUserLogged={isUserLogged} />}
        >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/history' element={<History />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
