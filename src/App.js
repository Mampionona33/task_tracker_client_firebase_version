import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

// first entry point of the application
const App = () => {
  return (
    <React.Fragment>
      <div className='root'>
        <h1>Place holder for App TEST</h1>
      </div>
    </React.Fragment>
  );
};

// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
