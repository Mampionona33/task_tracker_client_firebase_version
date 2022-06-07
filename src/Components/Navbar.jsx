import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import SingOutButton from '../Components/SingOutButton';

const SideBare = ({ isOpen }) => {
  const sidebarClasse = isOpen ? 'sidebar--is-open' : 'sidebar--is-close';
  console.log(isOpen);
  return (
    <div className={'sidebar ' + sidebarClasse}>
      <div className='sidebar__container'>
        <Link className='sidebar__container__elements' to={'/history'}>
          History
        </Link>
        <Link className='sidebar__container__elements' to={'/dashboard'}>
          Dashboard
        </Link>
      </div>
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
        <button
          type='button'
          className='navbar__button--menu'
          onClick={(e) => handleClickMenu(e)}
        >
          {!sideBarOpen ? (
            <span className='material-icons-round navbar__button__menu--toggle'>
              menu
            </span>
          ) : (
            <span class='material-icons-round navbar__button__menu--toggle'>
              close
            </span>
          )}
        </button>
        <SingOutButton />
      </div>
      <SideBare isOpen={sideBarOpen} />
    </>
  );
}
