import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import SingOutButton from '../Components/SingOutButton';

const SideBare = ({ isOpen }) => {
  const sidebarClasse = isOpen ? 'sidebar--is-open' : 'sidebar--is-close';
  console.log(isOpen);
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
    <>
      <div className='navbar'>
        <button className='navbar__menu' onClick={(e) => handleClickMenu(e)}>
          Menu
        </button>
        <SingOutButton />
      </div>
      <SideBare isOpen={sideBarOpen} />
    </>
  );
}
