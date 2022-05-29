import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import History from './Page/History';

// first entry point of the application
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </Router>
  );
}
