import React from 'react';
import { Link } from 'react-router-dom';
import useMountTransition from '../assets/useMountTransition';
import '../styles/SideBar.scss';

export default function SideBar({ isOpen }) {
  const hasTransitioneId = useMountTransition(isOpen, 3000);
  return (
    <>
      {(hasTransitioneId || isOpen) && (
        <div
          className={`sidebar ${hasTransitioneId && '--in'}${
            isOpen && '--visible'
          }`}
        >
          <Link to={'/history'}>history</Link>
          <Link to={'/dashboard'}>dashbord</Link>
        </div>
      )}
    </>
  );
}
