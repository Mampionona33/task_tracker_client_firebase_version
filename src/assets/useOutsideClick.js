import React, { useEffect, useRef } from 'react';

/* 
    this function is used to listen click out side components.
    callback is the fonction to execute after a click is heard
    
    Usage:
    Create const ref = useOutsideClick(()=>callback())
    then add this ref to the component witch we want to close
    when we click outside of it.

    see exemple in SideBar.jsx 
    
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
