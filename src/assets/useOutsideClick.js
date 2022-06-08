import React, { useEffect, useRef } from 'react';

/* 
    this function is used to listen click out side components.
    callback is the fonction to execute after a click is heard
    
    exemple of usage
    In Navbar.jsx to hide side bar and signout
    button on click out side these components.
*/

export default function useOutsideClick(callback) {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);
  return ref;
}
