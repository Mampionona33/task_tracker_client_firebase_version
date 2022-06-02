import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to={(window.location = 'login')} />;
};

export { PrivateRoute };
