import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import '../styles/Login.scss';

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

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__container__title'>
          Welcome to mampi tasck tracker
        </div>
        <GoogleButton
          className='login__container__button'
          onClick={(e) => handleClickSignIn(e)}
        />
      </div>
    </div>
  );
}
