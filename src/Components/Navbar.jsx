import React, { useState } from 'react';
import '../styles/Navbar.scss';

export default function Navbar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className='navbar'>
      <button
        className='navbar__menu__button'
        onClick={() => setToggleSideBar(!toggleSideBar)}
      >
        {!toggleSideBar ? (
          <span className='material-icons-round'>menu</span>
        ) : (
          <span class='material-icons-round'>close</span>
        )}
      </button>
    </div>
  );
}
