import { setCurrentScreen } from 'firebase/analytics';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';
import { singInWithGoogle } from '../Firebase/firebase';
import { ConditionalHomePage } from './ConditionalHomePage';

const GoogleSinginPage = () => {
  const navigate = useNavigate();
  const handleClickGoogleSignIn = async (ev) => {
    ev.preventDefault();
    try {
      await singInWithGoogle();
      navigate('dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <button className='button' onClick={(e) => handleClickGoogleSignIn(e)}>
        Signe In With Google
      </button>
    </React.Fragment>
  );
};

export default function Login() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? <ConditionalHomePage /> : <GoogleSinginPage />;
}
