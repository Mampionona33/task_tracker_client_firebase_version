import React from 'react';
import '../styles/BackgroundModal.scss';

export default function BackgroundModal({ isOpen, innerRef }) {
  return isOpen ? <div className='modal'></div> : '';
}
