import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate((window.location = 'login'));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <p>Placeholder Dashboard push</p>
      <button onClick={(e) => handleLogOut(e)}>sing out</button>
    </React.Fragment>
  );
}
