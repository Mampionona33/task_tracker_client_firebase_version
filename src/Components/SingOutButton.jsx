import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../Firebase/firebase';
import '../styles/variables.scss';
import '../styles/SingOutButton.scss';

export default function SingOutButton() {
  const handleClickSingout = async (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('taskTrackerUserisLoggeIn');
        localStorage.removeItem('taskTrackerUserisLoggeInPhotoUrl');
        console.log('id remove');
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
      type='button'
      className='signOut__button'
      onClick={(ev) => handleClickSingout(ev)}
    >
      Signout
    </button>
  );
}
