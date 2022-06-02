import { onAuthStateChanged, onIdTokenChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { auth, loggedUser } from './firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userRef = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      userRef.current = user;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
