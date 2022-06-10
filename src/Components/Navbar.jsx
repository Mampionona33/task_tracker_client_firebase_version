import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react';
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

  return (
    <div className='bars'>
      <div className='navbar'>
        <button
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
      </div>
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
}
