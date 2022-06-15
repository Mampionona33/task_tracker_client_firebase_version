import React, { useContext } from 'react';
import BackgroundModal from './BackgroundModal';
import Card from './Card';
import '../styles/NewTaskFormContainer.scss';
import NewTaskForm from './NewTaskForm';
import useOutsideClick from '../assets/useOutsideClick';
import { AnimationContext } from '../assets/animationContext';

export default function NewTaskFormContainer() {
  const context = useContext(AnimationContext);
  const { setNewTaskFormContainer } = context;
  const refNewTaskFormContainer = useOutsideClick(() =>
    setNewTaskFormContainer(false)
  );
  return (
    <div className='newTaskFormContainer' ref={refNewTaskFormContainer} >
      <Card title={'New Task'} children={<NewTaskForm />} />
      <BackgroundModal />
    </div>
  );
}
