import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = () => {
  const user = useContext(AuthContext);
  // error in navigate must be fixed
  return user === null ? <Navigate to={'login'} replace={true} /> : <Outlet />;
};

export { PrivateRoute };
