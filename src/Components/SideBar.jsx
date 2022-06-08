import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.scss';

export default function SideBar({ isOpen }) {
  const sidebarClasseName = isOpen ? ' sidebar--open' : ' sidebar--close';
  return (
    <div className={'sidebar' + sidebarClasseName}>
      <Link to={'/history'}>history</Link>
      <Link to={'/dashboard'}>dashbord</Link>
    </div>
  );
}
