import { setCurrentScreen } from 'firebase/analytics';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';
import { singInWithGoogle } from '../Firebase/firebase';

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
  console.log(user);
  return <LogginPage />;
}
