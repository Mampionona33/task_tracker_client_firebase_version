import React, { StrictMode, useContext, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import History from './Page/History';
import { UserContext } from './Firebase/context';
import ProtectedRoute from './Page/ProtectedRoute';
import './styles/App.scss';
import { AnimatePresence } from 'framer-motion';
import { AnimationContext } from './assets/animationContext';
import Admin from './Page/Admin';
import { gql, useMutation, useQuery } from '@apollo/client';
import { async } from '@firebase/util';

const GET_USER = gql`
  query SearchUsers($input: FilterUser) {
    searchUsers(input: $input) {
      name
      uid
      email
      picture
    }
  }
`;

const CREAT_USER = gql`
  mutation CreatNewUser($input: UserInput) {
    creatNewUser(input: $input) {
      name
      uid
      email
      picture
    }
  }
`;

export default function App() {
  const location = useLocation();
  /* 
    after login with google get credential in from context.js
    then check if the user from context is present in the database.
    If it is not present then create it
  */
  const {
    user,
    userUid,
    authUser,
    authName,
    authEmail,
    authPicture,
    setUserFromMongo,
    userFromMongo,
  } = useContext(UserContext);
  const { setToggleSideBar } = useContext(AnimationContext);
  const isUserLogged = localStorage.getItem('taskTrackerUserisLoggeIn');

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      input: {
        uid: userUid,
      },
    },
  });

  const [
    creatNewUser,
    {
      data: dataCreateNewUser,
      loading: loaddingUser,
      error: errorOnCreateNewUser,
    },
  ] = useMutation(CREAT_USER);

  useEffect(() => {
    if (data && authUser) {
      const userData = data.searchUsers;

      if (userData.length === 0) {
        creatNewUser({
          variables: {
            input: {
              uid: userUid,
              name: authName,
              email: authEmail,
              picture: authPicture,
            },
          },
        });
      }

      if (userData.length > 0) {
        const setUser = setUserFromMongo(userData);
        return () => {
          setUser;
        };
      }

      if (error) {
        console.log(error);
      }
    }
  }, [data, authUser]);

  useEffect(() => {
    if (data && data.searchUsers && data.searchUsers.length > 0) {
    }
  }, [data]);

  console.log(userFromMongo);

  return (
    <StrictMode>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setToggleSideBar(false)}
      >
        <Routes location={location} key={location.key}>
          <Route
            index
            element={!authUser ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            path='login'
            element={!authUser ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            element={<ProtectedRoute user={user} isUserLogged={authUser} />}
          >
            <Route path='admin' element={<Admin />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </StrictMode>
  );
}
