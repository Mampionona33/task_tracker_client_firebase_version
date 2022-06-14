import React, { createContext, useState } from 'react';

export const AnimationContext = createContext({});

const AnimationProvider = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [signOutBtnOpen, setSignOutBtnOpen] = useState(false);

  return (
    <AnimationContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        signOutBtnOpen,
        setSignOutBtnOpen,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
