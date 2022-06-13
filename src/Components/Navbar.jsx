import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import { UserContext } from '../Firebase/context';
import '../styles/Navbar.scss';
import {
  buttonCloseVariants,
  buttonMenuVariants,
  navbarTitleVariants,
  sidebarVariants,
} from './../animations/framerVariants';
import SideBar from './SideBar';
import SingOutButton from './SingOutButton';

export default function Navbar() {
  const context = useContext(AnimationContext);
  const { toggleSideBar, setToggleSideBar } = context;
  const location = useLocation();
  const { user } = useContext(UserContext);
  const [signOutBtnOpen, setSignOutBtnOpen] = useState(false);
  // const userAvatar = user && user.photoURL;
  const [userPhotoUrl, setUserPhotoUrl] = useState(null);
  useEffect(() => {
    if (user) {
      setUserPhotoUrl(user.photoUrl);
    }
  }, [user]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='bars'>
        <div className='navbar'>
          <button
            type='button'
            className='navbar__menu__button'
            onClick={() => setToggleSideBar(!toggleSideBar)}
          >
            {!toggleSideBar ? (
              <motion.span
                key={'iconMenu'}
                variants={buttonMenuVariants}
                initial='hidden'
                animate='animate'
                className='material-icons-round'
              >
                menu
              </motion.span>
            ) : (
              <motion.span
                key={'iconClose'}
                variants={buttonCloseVariants}
                initial='hidden'
                animate='animate'
                exit='exit'
                className='material-icons-round'
              >
                close
              </motion.span>
            )}
          </button>
          <motion.h1
            key={'navbarTitle'}
            variants={navbarTitleVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='navbar__title'
          >
            {location.pathname.slice(1).charAt(0).toUpperCase() +
              location.pathname.slice(2)}
          </motion.h1>
          <button
            type='button'
            onClick={() => setSignOutBtnOpen(!signOutBtnOpen)}
          >
            {user && (
              <img
                src={userPhotoUrl}
                alt={user.displayName.slice(0, user.displayName.indexOf(' '))}
              />
            )}
          </button>
        </div>
        <div className='navbar__container'>
          {toggleSideBar && (
            <motion.div
              key={'sidebar'}
              variants={sidebarVariants}
              initial='hidden'
              animate='animate'
              exit='exit'
            >
              <SideBar />
            </motion.div>
          )}
          {signOutBtnOpen && <SingOutButton />}
        </div>
      </div>
    </AnimatePresence>
  );
}
