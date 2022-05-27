import React from 'react';
import Contents from './Contents';
import NavBar from './NavBar';

export default function Page() {
  return (
    <React.Fragment>
      <NavBar />
      <Contents />
    </React.Fragment>
  );
}
