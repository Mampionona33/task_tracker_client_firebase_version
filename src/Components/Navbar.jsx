import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import SingOutButton from '../Components/SingOutButton';
import { UserContext } from './../Firebase/context';
import useOutsideClick from '../assets/useOutsideClick';
import SideBar from './SideBar';

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [showSignOutButton, setShowSignOutButton] = useState(false);
  const { user } = useContext(UserContext);
  const refSidebar = useOutsideClick(handleClickOutsideSidbar);
  const refSingOut = useOutsideClick(handleClickOutSignOut);

  function handleClickOutsideSidbar() {
    setSideBarOpen(false);
  }
  function handleClickOutSignOut() {
    setShowSignOutButton(false);
  }

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
        <div className='sidebar_modal' ref={refSidebar}>
          <button
            type='button'
            // adding ref to be able to use useOutsideClick in childe components
            className='navbar__button--menu'
            onClick={(e) => handleClickMenu(e)}
          >
            {!sideBarOpen ? (
              <span className='material-icons-round navbar__button__menu--toggle'>
                menu
              </span>
            ) : (
              <span className='material-icons-round navbar__button__menu--toggle'>
                close
              </span>
            )}
          </button>
          {sideBarOpen ? <SideBar /> : ''}
        </div>
        <div className='signOut__container' ref={refSingOut}>
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
          {showSignOutButton ? <SingOutButton /> : ''}
        </div>
      </div>
    </>
  );
}
