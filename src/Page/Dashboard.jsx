import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

export default function Dashboard() {
  const handleClickSingOut = (e) => {
    e.preventDefault();
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
    <>
      <h1>Dashboard</h1>
      <button onClick={(e) => handleClickSingOut(e)}>SingOut</button>
    </>
  );
}
