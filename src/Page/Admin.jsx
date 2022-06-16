import React from 'react';
import Card from '../Components/Card';
import FormSetUserAdmin from '../Components/FormSetUserAdmin';
import '../styles/variables.scss';

export default function Admin() {
  return (
    <div
      className='Admin'
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Card title={'Set user Admin'} children={<FormSetUserAdmin />} />;
    </div>
  );
}
