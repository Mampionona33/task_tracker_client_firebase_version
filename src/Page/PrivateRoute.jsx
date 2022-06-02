import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? children : <Navigate to={(window.location = 'login')} />;
};

export { PrivateRoute };
