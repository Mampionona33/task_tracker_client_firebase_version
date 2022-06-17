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
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useMutation,
  useQuery,
} from '@apollo/client';

const GET_USER = gql`
  query SearchUsers($input: FilterUser) {
    searchUsers(input: $input) {
      name
      uid
      email
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
  const { user, userUid, authUser } = useContext(UserContext);
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
              name: authUser.auth.currentUser.displayName,
              email: authUser.auth.currentUser.email,
              picture: authUser.auth.currentUser.photoURL,
            },
          },
        });
      }
    }
  }, [data, authUser]);
  

  return (
    <StrictMode>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setToggleSideBar(false)}
      >
        <Routes location={location} key={location.key}>
          <Route
            index
            element={!isUserLogged ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            path='login'
            element={!isUserLogged ? <Login /> : <Navigate to={'/dashboard'} />}
          />
          <Route
            element={<ProtectedRoute user={user} isUserLogged={isUserLogged} />}
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
