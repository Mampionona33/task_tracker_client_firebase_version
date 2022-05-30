import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
