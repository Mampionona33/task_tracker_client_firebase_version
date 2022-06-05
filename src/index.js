import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { AuthContextProvider } from './Firebase/context';
import './styles/index.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
