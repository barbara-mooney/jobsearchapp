import React from 'react';
import './Navigation.css';
import '../SearchForm/SearchForm.css';
import coverpic from './handshake.jpg';

const Navigation = () => {
  return (
    <div className='box'>
      <div className='coverpic' style={{backgroundImage:`url(${coverpic})`}}>
        <header>
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f5 link dim black pa1 mt3 mb3 mr3 pointer'>Sign-In</p>
            <p className='f5 link dim black pa1 mt3 mb3 mr3 pointer'>Register</p>
          </nav>
        </header>
        <div className='mainbox'>
          <div className='title'>SMART HUNT</div>
          <div className='tagline'>find your next gig here</div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;