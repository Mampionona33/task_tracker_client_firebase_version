import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

const ConditionalHomePage = () => {
  const [toDashboard, setToDashboard] = useState(false);
  const [toOthers, setToOthers] = useState(false);
  const navigate = useNavigate();

  const unsubscrib = window.location;
  useEffect(() => {
    if (unsubscrib.pathname === '/' || unsubscrib.pathname === '/login') {
      console.log(location);
      setToDashboard(true);
    }
    if (unsubscrib.pathname !== '/' || unsubscrib.pathname !== '/login') {
      setToOthers(true);
    }
  }, []);

  if (toDashboard) {
    return <Navigate to={'dashboard'} />;
  }
  if (toOthers) {
    return <Navigate to={window.location} />;
  }
};

export { ConditionalHomePage };
