import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth, user } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = () => {
  const [user_, setUser_] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user !== null) {
        setUser_(user.displayName);
      } else {
        setUser_(null);
      }
    });
  }, []);

  return user_ !== null ? <Outlet /> : <Navigate to={'login'} replace={true} />;
};

export { PrivateRoute };
