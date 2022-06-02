import { signOut } from 'firebase/auth';
import React from 'react';
import { auth, googleLogOut } from '../Firebase/firebase';

export default function Dashboard() {
  const handleLogOut = () => {
    googleLogOut().then((window.location = 'login'));
  };

  return (
    <React.Fragment>
      <p>Placeholder Dashboard push</p>
      <button onClick={handleLogOut}>sing out</button>
    </React.Fragment>
  );
}
