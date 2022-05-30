import React from 'react';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  return (
    <React.Fragment>
      <button className='button' onClick={signInWithPopup}>
        Signe In With Google
      </button>
    </React.Fragment>
  );
}
