import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function ProtectedRoute({ children, isUserLogged }) {
  if (!isUserLogged) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return (
    <>
      <Navbar />
      {children ? children : <Outlet />}
    </>
  );
}
