import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/Navbar.scss';
import {
  buttonCloseVariants,
  buttonMenuVariants,
  navbarTitleVariants,
  sidebarVariants,
} from './../animations/framerVariants';
import SideBar from './SideBar';

export default function Navbar() {
  const context = useContext(AnimationContext);
  const { toggleSideBar, setToggleSideBar } = context;
  const location = useLocation();

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
              className='material-icons-round'
            >
              close
            </motion.span>
          )}
        </button>
        <motion.h1
          variants={navbarTitleVariants}
          initial='hidden'
          animate='animate'
          transition={{ type: '' }}
          className='navbar__title'
        >
          {location.pathname.slice(1).charAt(0).toUpperCase() +
            location.pathname.slice(2)}
        </motion.h1>
        <button type='button'>user</button>
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
