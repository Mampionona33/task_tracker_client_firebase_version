import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { AuthContext } from '../Firebase/context';
import { auth, singInWithGoogle } from '../Firebase/firebase';
import Dashboard from './Dashboard';

const LogginPage = () => {
  return (
    <React.Fragment>
      <button className='button' onClick={singInWithGoogle}>
        Signe In With Google
      </button>
    </React.Fragment>
  );
};

export default function Login() {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      {user ? <Navigate to={'dashboard'} /> : <LogginPage />}
    </React.Fragment>
  );
}
