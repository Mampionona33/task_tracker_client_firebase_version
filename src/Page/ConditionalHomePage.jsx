import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';
import Dashboard from './Dashboard';
import Login from './Login';

const ConditionalHomePage = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
};

export { ConditionalHomePage };
