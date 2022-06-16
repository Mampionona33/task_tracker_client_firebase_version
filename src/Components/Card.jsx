import React from 'react';
import '../styles/Card.scss';

export default function Card({ title, children }) {
  return (
    <div className='card'>
      <div className='card__container' style={{ margin: '1rem' }}>
        <h2 className='card__title' style={{ margin: '1.5rem 2.5rem' }}>
          {title}
        </h2>
        <hr />
        <div className='element' style={{ margin: '0 2rem 2rem 2rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
