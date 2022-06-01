import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { auth, singInWithGoogle } from '../firebase';

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
  const [userLogged, setUserLogged] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setUserLogged(user);
    }
  });
  useEffect(() => {}, [userLogged]);

  return (
    <React.Fragment>
      {userLogged !== null ? (
        <Navigate to={'dashboard'} replace={true} />
      ) : (
        <LogginPage />
      )}
    </React.Fragment>
  );
}
