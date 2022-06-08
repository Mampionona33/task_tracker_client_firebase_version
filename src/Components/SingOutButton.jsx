import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase';
import '../styles/variables.scss';

export default function SingOutButton({ innerRef }) {
  const handleClickSingout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('taskTrackerUserisLoggeIn');
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
      ref={innerRef}
      type='button'
      className='signOut__button'
      onClick={handleClickSingout}
      style={{
        backgroundColor: '#4b4b4b',
        position: 'absolute',
        top: '50px',
        right: '0',
        borderRadius: ' 0 0 5px 5px',
        border: 'none',
        padding: '0 1rem 0.5em 1rem',
      }}
    >
      Signout
    </button>
  );
}
