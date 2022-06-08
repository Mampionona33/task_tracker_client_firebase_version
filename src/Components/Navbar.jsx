import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import SingOutButton from '../Components/SingOutButton';
import { UserContext } from './../Firebase/context';
import useOutsideClick from '../assets/useOutsideClick';
import SideBar from './SideBar';
import BackgroundModal from './BackgroundModal';

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [showSignOutButton, setShowSignOutButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(UserContext);

  /* 
    The useOutsideClick is fired on components mount
    It listen to all click in the document
  */
  const refSidebar = useOutsideClick(handleClickOutsideSidbar);
  const refSingOut = useOutsideClick(handleClickOutSignOut);

  // hide sidebar and modal on click outside thems
  function handleClickOutsideSidbar() {
    setIsModalOpen(false);
    setSideBarOpen(false);
  }

  // hide SignOut button on click outside it
  function handleClickOutSignOut() {
    setShowSignOutButton(false);
  }

  // execut when menu button is clicked
  const handleClickMenu = (event) => {
    event.preventDefault();
    setSideBarOpen(!sideBarOpen);
    setIsModalOpen(!isModalOpen);
  };

  // execute when avatar icon is clicked
  const handleClickAvatar = (event) => {
    event.preventDefault();
    setShowSignOutButton(!showSignOutButton);
  };

  return (
    <>
      <div className='navbar'>
        <div className='navbar__sidebar' ref={refSidebar}>
          <button
            type='button'
            // adding ref to be able to use useOutsideClick in childe components
            className='navbar__sidebar__buton'
            onClick={(e) => handleClickMenu(e)}
          >
            {!sideBarOpen ? (
              <span className='material-icons-round '>menu</span>
            ) : (
              <span className='material-icons-round '>close</span>
            )}
          </button>
          {sideBarOpen ? <SideBar isOpen={sideBarOpen} /> : ''}
        </div>
        <BackgroundModal isOpen={isModalOpen} />
        <div className='navbar__signOut' ref={refSingOut}>
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
