import React from 'react';

export default function Login() {
  return (
    <React.Fragment>
      <button className='button' onClick={handleSingIng}>
        Signe In With Google
      </button>
      <p>{userName}</p>
    </React.Fragment>
  );
}
