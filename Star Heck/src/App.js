import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

function App() {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    console.log('ravioli!');
  }

  let statusText = 'Red Alert!';

  return (
    <div className='everything'>
    <textarea value={'He fires the phasers.'} readOnly={true} onChange={() => console.log('change')} className="textFeed globalCentering"/>
    <div className='statusDisplay globalCentering'>
      <span class="dot" /> {statusText}
    </div>
    <form onSubmit={handleSubmit}>
      <input defaultValue="Warp speed!" className='userInput globalCentering' />
    </form>
    </div>
  );
}

export default App;
