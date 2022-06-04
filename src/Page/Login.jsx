import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import './Login.css';

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
    <div className='paper'>
      <div className='paper--title1'>Welcome to mampi tasck tracker</div>
      <GoogleButton
        className='googleButton'
        onClick={(e) => handleClickSignIn(e)}
      />
    </div>
  );
}
