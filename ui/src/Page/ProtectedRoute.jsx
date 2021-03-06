import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NewTaskFormContainer from '../Components/NewTaskFormContainer';
import { AnimationContext } from './../assets/animationContext';
import { AnimatePresence, motion } from 'framer-motion';
import { newTaskFormContainerVariants } from '../animations/framerVariants';

export default function ProtectedRoute({ children, isUserLogged }) {
  const context = useContext(AnimationContext);
  const { newTaskFormContainer } = context;

  if (!isUserLogged) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        {newTaskFormContainer && (
          <motion.div
            key={'newTaskFormContainer'}
            className='newTaskFormContainer'
            variants={newTaskFormContainerVariants}
            initial='hidden'
            animate='animate'
            exit='exit'
          >
            <NewTaskFormContainer />
          </motion.div>
        )}
      </AnimatePresence>

      {children ? children : <Outlet />}
    </>
  );
}
