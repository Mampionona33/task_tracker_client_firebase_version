import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to={'/login'} replace />;
  }
  return children ? children : <Outlet />;
};

export { PrivateRoute };
