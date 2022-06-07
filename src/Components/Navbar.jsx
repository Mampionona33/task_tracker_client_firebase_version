import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import SingOutButton from '../Components/SingOutButton';
import { UserContext } from './../Firebase/context';

const SideBare = ({ isOpen }) => {
  const sidebarClasse = isOpen ? 'sidebar--is-open' : 'sidebar--is-close';

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
  const [showSignOutButton, setShowSignOutButton] = useState(false);
  const { user } = useContext(UserContext);

  console.log(user);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setSideBarOpen(!sideBarOpen);
  };

  const handleClickAvatar = (event) => {
    event.preventDefault();
    setShowSignOutButton(!showSignOutButton);
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
        {user ? (
          <button
            onClick={(e) => handleClickAvatar(e)}
            type='button'
            className='navbar__userAvatar__button'
          >
            <span
              className='navbar__userAvatar__button__img'
              style={{ backgroundImage: `url(${user.photoURL})` }}
            >
              {user.displayName}
            </span>
          </button>
        ) : (
          ''
        )}
      </div>
      {sideBarOpen ? <SideBare isOpen={sideBarOpen} /> : ''}
      {showSignOutButton ? <SingOutButton /> : ''}
    </>
  );
}
