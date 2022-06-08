import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <Link to={'/history'}>history</Link>
      <Link to={'/dashboard'}>dashbord</Link>
    </div>
  );
}
