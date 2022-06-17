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
  const [authName, setAuthName] = useState(null);
  const [authEmail, setAuthEmail] = useState(null);
  const [authPicture, setAuthPicture] = useState(null);
  const [erroR, setErroR] = useState(null);
  const [userUid, setUserUid] = useState(null);

  const [userFromMongo, setUserFromMongo] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      try {
        if (result) {
          setUserUid(result.uid);
          setAuthEmail(result.email);
          setAuthName(result.displayName);
          setAuthPicture(result.photoURL);
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
    <UserContext.Provider
      value={{
        authUser,
        authEmail,
        authName,
        authPicture,
        erroR,
        userUid,
        userFromMongo,
        setUserFromMongo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
