import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
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
  const [erroR, setErroR] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      try {
        if (result) {
          setUser(result);
          localStorage.setItem('taskTrackerUserisLoggeIn', 'true');
          localStorage.setItem(
            'taskTrackerUserisLoggeInPhotoUrl',
            result.photoURL
          );
        }
      } catch (error) {
        setErroR.log(error.message);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, erroR }}>
      {children}
    </UserContext.Provider>
  );
};
