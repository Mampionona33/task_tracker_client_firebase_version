import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children, isUserLogged }) {
  if (!isUserLogged) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return children ? children : <Outlet />;
}
