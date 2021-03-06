import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimationContext } from '../assets/animationContext';
import '../styles/SideBar.scss';
import BackgroundModal from './BackgroundModal';
import useOutsideClick from './../assets/useOutsideClick';

export default function SideBar() {
  const context = useContext(AnimationContext);
  const { setToggleSideBar } = context;
  const refSidebar = useOutsideClick(() => setToggleSideBar(false));
  const navigate = useNavigate();

  const handleClickListItem = (event, link) => {
    setToggleSideBar(false);
    navigate(link);
  };

  return (
    <>
      <div className='sidebar' ref={refSidebar}>
        <ul className='sidebar__list'>
          <li
            className='sidebar__list__item'
            onClick={(event) => handleClickListItem(event, '/dashboard')}
          >
            <span className='material-icons-round sidebar__list__item__icon'>
              dashboard
            </span>
            Dashboard
          </li>
          <li
            className='sidebar__list__item'
            onClick={(event) => handleClickListItem(event, '/history')}
          >
            <span className='material-icons-round sidebar__list__item__icon'>
              work_history
            </span>
            History
          </li>
          <li
            className='sidebar__list__item'
            onClick={(event) => handleClickListItem(event, '/admin')}
          >
            <span className='material-icons-round sidebar__list__item__icon'>
              work_history
            </span>
            Admin
          </li>
        </ul>
      </div>
      <BackgroundModal />
    </>
  );
}
