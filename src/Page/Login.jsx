import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

export default function Login() {
  const navigate = useNavigate();

  const handleClickSignIn = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <GoogleButton onClick={(e) => handleClickSignIn(e)} />;
}
