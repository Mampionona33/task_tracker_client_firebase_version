import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/SideBar.scss';

export default function SideBar() {
  const context = useContext(AnimationContext);
  const { toggleSideBar, setToggleSideBar } = context;
  return (
    <div className='sidebar'>
      <Link onClick={() => setToggleSideBar(false)} to={'/history'}>
        history
      </Link>
      <Link onClick={() => setToggleSideBar(false)} to={'/dashboard'}>
        Dashboard
      </Link>
    </div>
  );
}
