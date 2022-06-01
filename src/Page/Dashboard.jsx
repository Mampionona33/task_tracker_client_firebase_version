import { signOut } from 'firebase/auth';
import React from 'react';
import { auth, googleLogOut } from '../Firebase/firebase';

export default function Dashboard() {
  return (
    <React.Fragment>
      <p>Placeholder Dashboard push</p>
      <button onClick={googleLogOut}>sing out</button>
    </React.Fragment>
  );
}
