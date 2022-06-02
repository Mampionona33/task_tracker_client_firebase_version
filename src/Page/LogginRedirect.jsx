import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const LogginRedirect = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to={(window.location = 'dashboard')} /> : children;
};

export { LogginRedirect };
