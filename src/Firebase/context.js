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
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      // try {
      //   setUser(result);
      //   setUserAvatar(result.photoURL);
      // } catch (error) {
      //   console.log(error);
      // }

      if (result) {
        setUser(result);
        setUserAvatar(result.photoURL);
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
    <UserContext.Provider value={{ user, userAvatar }}>
      {children}
    </UserContext.Provider>
  );
};
