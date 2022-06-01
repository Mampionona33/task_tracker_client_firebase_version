import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth, user } from '../firebase';

const PrivateRoute = () => {
  const [user_, setUser_] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user !== null) {
      setUser_(user.displayName);
    }
  });

  return user_ !== null ? <Outlet /> : <Navigate to={'login'} />;
};

export { PrivateRoute };
