import React from 'react';
import './SearchForm.css';

const SearchForm = ({ title, location, handleChange, handleSubmit }) => {
  return (
    <div className='w-85' >
      <form className={'ma4 br3'}>
        <label className='f5 left b'>Job title:
          <input required className='f5 pa1 left ml1' type='text' name='title' value={title} onChange={handleChange} />
        </label>
        <label className='f5 left ml3 b'>Location:
          <input required className='f5 pa1 left ml1' type='text' name='location' value={location} onChange={handleChange} />
        </label>
        <input className='f5 pa1 left ml3 pl3 pr3 b' type='submit' name='handleSubmit' onClick={handleSubmit}/>
      </form>
    </div>
  )
} 

export default SearchForm;