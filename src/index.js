import { createRoot } from 'react-dom/client';
import React from 'react';
import { StrictMode } from 'react';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// used to make component hot reload
if (module.hot) {
    module.hot.accept();
  }