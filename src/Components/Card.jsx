import React from 'react';
import '../styles/Card.scss';

export default function Card() {
  return (
    <div className='card'>
      <div className='triangle__sup'></div>
      <h1>title</h1>
      <div className='element'>element</div>
      <div className='triangle__inf'></div>
    </div>
  );
}
