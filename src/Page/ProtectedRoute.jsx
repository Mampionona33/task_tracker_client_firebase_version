import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NewTaskForm from './../Components/NewTaskForm';
import { AnimationContext } from './../assets/animationContext';

export default function ProtectedRoute({ children, isUserLogged }) {
  const context = useContext(AnimationContext);
  const { newTaskForm, setNewTaskForm } = context;

  if (!isUserLogged) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return (
    <>
      <Navbar />
      {newTaskForm && <NewTaskForm />}
      {children ? children : <Outlet />}
    </>
  );
}
