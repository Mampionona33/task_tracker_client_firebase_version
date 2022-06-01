import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = () => {
  const user = useContext(AuthContext);

  return !user ? <Navigate to={'login'} replace={true} /> : <Outlet />;
};

export { PrivateRoute };
