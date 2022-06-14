import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/SideBar.scss';
import BackgroundModal from './BackgroundModal';
import useOutsideClick from './../assets/useOutsideClick';

export default function SideBar() {
  const context = useContext(AnimationContext);
  const { toggleSideBar, setToggleSideBar } = context;
  const refSidebar = useOutsideClick(() => setToggleSideBar(false));
  return (
    <>
      <div className='sidebar' ref={refSidebar}>
        <Link onClick={() => setToggleSideBar(false)} to={'/history'}>
          history
        </Link>
        <Link onClick={() => setToggleSideBar(false)} to={'/dashboard'}>
          Dashboard
        </Link>
      </div>
      <BackgroundModal />
    </>
  );
}
