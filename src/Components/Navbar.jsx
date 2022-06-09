import { motion } from 'framer-motion';
import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { buttonVariants } from './../animations/framerVariants';

export default function Navbar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className='navbar'>
      <motion.button
        className='navbar__menu__button'
        onClick={() => setToggleSideBar(!toggleSideBar)}
        variants={buttonVariants}
        initial={buttonVariants.hidden}
        animate={buttonVariants.visible}
      >
        {!toggleSideBar ? (
          <span className='material-icons-round'>menu</span>
        ) : (
          <span class='material-icons-round'>close</span>
        )}
      </motion.button>
    </div>
  );
}
