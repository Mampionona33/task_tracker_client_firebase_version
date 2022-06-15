import React from 'react';
import '../styles/BackgroundModal.scss';

export default function BackgroundModal({ children, topPosition }) {
  return (
    <div className='modal' style={{ top: topPosition }}>
      {children}
    </div>
  );
}
