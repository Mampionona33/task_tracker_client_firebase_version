import React from 'react';

export default function Login() {
  const handleSingIng = () => {
    console.log('login');
  };
  return (
    <React.Fragment>
      <button className='button' onClick={handleSingIng}>
        Signe In With Google
      </button>
    </React.Fragment>
  );
}
