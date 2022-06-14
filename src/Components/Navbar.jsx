import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import useOutsideClick from '../assets/useOutsideClick';
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
  const { toggleSideBar, setToggleSideBar, setSignOutBtnOpen, signOutBtnOpen } =
    context;
  const location = useLocation();
  const { user } = useContext(UserContext);
  const refSignOutButton = useOutsideClick(() => setSignOutBtnOpen(false));

  return (
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

        {/* put the button avatar and the singOutButton inside one
            div to be abble to use useOutsideClick and at the same
            time to be abble to remove singOutButton on click on
            the avatar icon  */}
        <div className='signOut__container' ref={refSignOutButton}>
          <button
            className='navbar__userAvatar__button'
            type='button'
            onClick={() => setSignOutBtnOpen(!signOutBtnOpen)}
          >
            {user && (
              <img
                className='navbar__userAvatar__button__image'
                src={user.photoURL}
                // Adding referrerPolicy to prevent stric origine
                // error forbiden 403
                referrerPolicy='no-referrer'
                alt={user.displayName.slice(0, user.displayName.indexOf(' '))}
              />
            )}
          </button>
          {signOutBtnOpen && <SingOutButton />}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </div>
  );
}
