import React from 'react';
import '../styles/BackgroundModal.scss';

export default function BackgroundModal({ children, callback }) {
  return (
    <div className='modal' onClick={() => callback(false)}>
      {children}
    </div>
  );
}
