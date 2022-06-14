import React from 'react';
import '../styles/BackgroundModal.scss';

export default function BackgroundModal({ children }) {
  return <div className='modal'>{children}</div>;
}
