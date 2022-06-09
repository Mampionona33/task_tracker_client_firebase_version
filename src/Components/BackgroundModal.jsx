import React from 'react';
import '../styles/BackgroundModal.scss';
import Sliding from './Sliding';

export default function BackgroundModal({ isOpen }) {
  return <Sliding classes={'modal'} show={isOpen} />;
}
