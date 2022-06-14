import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/SideBar.scss';
import BackgroundModal from './BackgroundModal';
import useOutsideClick from './../assets/useOutsideClick';

export default function SideBar() {
  const context = useContext(AnimationContext);
  const { setToggleSideBar } = context;
  const refSidebar = useOutsideClick(() => setToggleSideBar(false));
  return (
    <>
      <div className='sidebar' ref={refSidebar}>
        <div className='sidebar__element'>
          <span class='material-icons-round button'>dashboard</span>
          <Link
            className='sidebar__element__item'
            onClick={() => setToggleSideBar(false)}
            to={'/dashboard'}
          >
            Dashboard
          </Link>
        </div>
        <div className='sidebar__element'>
          <span class='material-icons-round button'>work_history</span>
          <Link
            className='sidebar__element__item'
            onClick={() => setToggleSideBar(false)}
            to={'/history'}
          >
            history
          </Link>
        </div>
      </div>
      <BackgroundModal />
    </>
  );
}
