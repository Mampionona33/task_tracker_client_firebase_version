import React from 'react';
import { Link } from 'react-router-dom';
import useMountTransition from '../assets/useMountTransition';
import '../styles/SideBar.scss';
import BackgroundModal from './BackgroundModal';
import Sliding from './Sliding';

export default function SideBar({ isOpen }) {
  return (
    <Sliding classes={'sidebar'} show={isOpen}>
      <BackgroundModal>
        <div className='sidebar__components'>
          <Link to={'/history'}>history</Link>
          <Link to={'/dashboard'}>dashboard</Link>
        </div>
      </BackgroundModal>
    </Sliding>
  );
}
