import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/Navbar.scss';
import {
  buttonCloseVariants,
  buttonMenuVariants,
  sidebarVariants,
} from './../animations/framerVariants';
import SideBar from './SideBar';

export default function Navbar() {
  const context = useContext(AnimationContext);
  const { toggleSideBar, setToggleSideBar } = context;
  const location = useLocation();

  return (
    <AnimatePresence>
      <div className='bars'>
        <div className='navbar'>
          <button
            type='button'
            className='navbar__menu__button'
            onClick={() => setToggleSideBar(!toggleSideBar)}
          >
            {!toggleSideBar ? (
              <motion.span
                variants={buttonMenuVariants}
                initial={buttonMenuVariants.hidden}
                animate={buttonMenuVariants.animate}
                className='material-icons-round'
              >
                menu
              </motion.span>
            ) : (
              <motion.span
                variants={buttonCloseVariants}
                initial={buttonCloseVariants.hidden}
                animate={buttonCloseVariants.animate}
                className='material-icons-round'
              >
                close
              </motion.span>
            )}
          </button>
          <h1 className='navbar__title'>
            {location.pathname.slice(1).charAt(0).toUpperCase() +
              location.pathname.slice(2)}
          </h1>
          <button type='button'>user</button>
        </div>

        {toggleSideBar && (
          <motion.div
            variants={sidebarVariants}
            initial={sidebarVariants.hidden}
            animate={sidebarVariants.animate}
            exit={sidebarVariants.exit}
          >
            <SideBar />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
