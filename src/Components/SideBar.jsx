import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.scss';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <Link to={'/history'}>history</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
    </div>
  );
}
