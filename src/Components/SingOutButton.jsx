import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase';

export default function SingOutButton() {
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
    <button type='button' onClick={handleClickSingout}>
      Signout
    </button>
  );
}
