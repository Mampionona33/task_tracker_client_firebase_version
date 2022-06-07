import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from './firebase';

/* 
  this file containts all of context "state"
  for the whole childe components of index.js
  Enclosed the App.js with AuthContextProvider in index.js
 */

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        setUser(result);
        localStorage.setItem('taskTrackerUserisLoggeIn', 'true');
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  if (user) {
    console.log(user.photoURL);
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
