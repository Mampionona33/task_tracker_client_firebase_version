import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscrip = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscrip;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(AuthContext);
}
