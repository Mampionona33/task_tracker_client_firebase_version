import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = ({ children, user, redirectPath = 'login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export { PrivateRoute };
