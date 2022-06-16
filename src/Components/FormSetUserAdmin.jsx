import React from 'react';
export default function FormSetUserAdmin() {
  return (
    <form
      action=''
      className='setUserAdmin__form'
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <div className='userForm' style={{ display: 'flex', gap: '1rem' }}>
        <label htmlFor='userEmail'>User email</label>
        <input
          type='email'
          name='userEmail'
          id='userEmail'
          placeholder='admin@exemple.com'
        />
      </div>
      <div
        className='form__button'
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
      >
        <input type='submit' value='save' />
        <input type='button' value='Cancel' />
      </div>
    </form>
  );
}
