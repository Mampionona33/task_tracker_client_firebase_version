import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { AuthProvider } from './Firebase/context';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
