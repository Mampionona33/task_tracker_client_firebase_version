import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleClickSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <button onClick={(e) => handleClickSignIn(e)}>SingIn with Google</button>
    </>
  );
}
