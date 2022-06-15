import React from 'react';
export default function NewTaskForm() {
  return (
    <form action='' className='NewTaskForm'>
      <div className='NewTaskForm__element'>
        <label htmlFor='taskNumber'>Number</label>
        <input type='text' name='taskNumber' />
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='type-select'>Type</label>
        <select name='type' id='type-select'>
          <option value=''>Contenu</option>
          <option value='AutoValidMaj'>AutoValidMaj</option>
        </select>
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='url'>Booth Url</label>
        <input type='url' name='url' />
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='cat'>Cathegorie</label>
        <input type='text' name='cat' />
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='statuCom-select'>Status Com</label>
        <select name='statuCom' id='statuCom-select'>
          <option value=''>---</option>
          <option value='Abondon'>Abondon</option>
        </select>
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='statuIvpn-select'>Status Com</label>
        <select name='statuIvpn' id='statuIvpn-select'>
          <option value=''>I</option>
          <option value='V'>V</option>
        </select>
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='case-select'>Status Com</label>
        <select name='case' id='case-select'>
          <option value=''>Normal</option>
          <option value='Sby'>Sby</option>
        </select>
      </div>

      <div className='NewTaskForm__element'>
        <label htmlFor='comment'>Comment</label>
        <input type='text' name='comment' />
      </div>
      <div className='btn_container'>
        <input type='submit' value='Ok' />
        <input type='button' value='cancel' />
      </div>
    </form>
  );
}
