import React from 'react';
import BackgroundModal from './BackgroundModal';
import Card from './Card';
import '../styles/NewTaskFormContainer.scss';
import NewTaskForm from './NewTaskForm';

export default function NewTaskFormContainer() {
  return (
    <div className='newTaskFormContainer'>
      <Card title={'New Task'} children={<NewTaskForm />} />
      <BackgroundModal />
    </div>
  );
}
