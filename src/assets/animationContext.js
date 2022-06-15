import React, { createContext, useState } from 'react';

export const AnimationContext = createContext({});

const AnimationProvider = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [signOutBtnOpen, setSignOutBtnOpen] = useState(false);
  const [newTaskFormContainer, setNewTaskFormContainer] = useState(false);

  return (
    <AnimationContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        signOutBtnOpen,
        setSignOutBtnOpen,
        newTaskFormContainer,
        setNewTaskFormContainer,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
