import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from './firebase';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client';

/* 
  this file containts all of context "state"
  for the whole childe components of index.js
  Enclosed the App.js with AuthContextProvider in index.js
 */

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [erroR, setErroR] = useState(null);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      try {
        if (result) {
          // console.log(result.uid);
          setUserUid(result.uid);
          console.log(result.uid);
          setAuthUser(result);
          localStorage.setItem('taskTrackerUserisLoggeIn', 'true');
          localStorage.setItem(
            'taskTrackerUserisLoggeInPhotoUrl',
            result.photoURL
          );
        }
      } catch (error) {
        setErroR(error.message);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <UserContext.Provider value={{ authUser, erroR, userUid }}>
      {children}
    </UserContext.Provider>
  );
};
