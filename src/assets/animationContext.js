import React, { createContext, useState } from 'react';

export const AnimationContext = createContext({});

const AnimationProvider = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <AnimationContext.Provider value={{ toggleSideBar, setToggleSideBar }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
