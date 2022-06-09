import React from 'react';
import '../styles/BackgroundModal.scss';
import Sliding from './Sliding';

export default function BackgroundModal({ children }) {
  return <div className='modal'>{children}</div>;
}
