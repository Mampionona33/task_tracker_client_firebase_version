import React, { useContext } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { UserContext } from './Firebase/context';
import ProtectedRoute from './Page/ProtectedRoute';
import './styles/App.scss';
import Navbar from './Components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { AnimationContext } from './assets/animationContext';

export default function App() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const { setToggleSideBar } = useContext(AnimationContext);
  const isUserLogged = localStorage.getItem('taskTrackerUserisLoggeIn');

  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setToggleSideBar(false)}
      >
        <Routes location={location} key={location.key}>
          <Route
            index
            element={!isUserLogged ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            path='login'
            element={!isUserLogged ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            element={<ProtectedRoute user={user} isUserLogged={isUserLogged} />}
          >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
