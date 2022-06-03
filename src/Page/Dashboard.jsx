import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleClickSingOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('isLoggeIn');
      })
      .then(() => {
        navigate('/', { replace: true });
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
