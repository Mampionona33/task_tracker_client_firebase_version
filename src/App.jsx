import { Router } from 'express';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './Page/Page';

// first entry point of the application
export default function App() {
  return <Page />;
}
