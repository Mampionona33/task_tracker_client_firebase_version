import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.scss';
import { motion } from 'framer-motion';
import { sidebarVariants } from '../animations/framerVariants';

export default function SideBar() {
  return (
    <motion.div
      variants={sidebarVariants}
      initial={sidebarVariants.hidden}
      animate={sidebarVariants.animate}
      exit={sidebarVariants.exit}
      className='sidebar'
    >
      <Link to={'/history'}>history</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
    </motion.div>
  );
}
