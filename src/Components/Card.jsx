import React from 'react';
import '../styles/Card.scss';

export default function Card({ title, children }) {
  return (
    <div className='card'>
      <h1 className='card__title'>{title}</h1>
      <hr />
      <div className='element'>{children}</div>
    </div>
  );
}
