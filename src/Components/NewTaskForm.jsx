import React from 'react';
import BackgroundModal from './BackgroundModal';
import Card from './Card';
import '../styles/NewTaskForm.scss';

export default function NewTaskForm() {
  return (
    <div className='newTaskForm'>
      <Card />
      <BackgroundModal topPosition={'6vh'} />
    </div>
  );
}
