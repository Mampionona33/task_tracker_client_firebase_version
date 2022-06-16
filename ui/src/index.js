import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { AuthContextProvider } from './Firebase/context';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import AnimationProvider from './assets/animationContext';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <AnimationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimationProvider>
  </AuthContextProvider>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
