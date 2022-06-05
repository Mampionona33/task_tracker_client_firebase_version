import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const SideBare = ({ isOpen }) => {
  const sidebarClasse = isOpen ? 'navbar__sidebar --is-open' : 'navbar__sidebar';

  return (
    <div className={sidebarClasse}>
      <Link to={'history'}>History</Link>
    </div>
  );
};

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <div className='navbar'>
      <button className='navbar__menu' onClick={(e) => handleClickMenu(e)}>
        Menu
      </button>
      <SideBare isOpen={sideBarOpen} />
    </div>
  );
}
