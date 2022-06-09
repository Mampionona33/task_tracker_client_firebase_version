import { motion } from 'framer-motion';
import React, { useState } from 'react';
import '../styles/Navbar.scss';
import {
  buttonCloseVariants,
  buttonMenuVariants,
} from './../animations/framerVariants';
import SideBar from './SideBar';

export default function Navbar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

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
      <SideBar />
    </div>
  );
}
