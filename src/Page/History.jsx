import React from 'react';
import { Link } from 'react-router-dom';
export default function History() {
  return (
    <>
      <h1>History</h1>
      <Link to={'/dashboard'}>Dashboard</Link>
    </>
  );
}
