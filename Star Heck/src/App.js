import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { getTypos } from './CommandParser';

function App() {

  const [typos, setTypos] = useState(null);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    console.log('ravioli!');
  }

  let statusText = 'Red Alert!';
  let statusColor = 'red';
  let status = 'yellow';

  if(!typos) {
    //setTypos(getTypos('ravioli').toString());
    setTypos(getTypos('ravioli')[0]);
  }


  return (
    <div className='everything'>
    <textarea value={typos} readOnly={true} onChange={() => console.log('change')} className="textFeed globalCentering"/>
    <div className='statusDisplay globalCentering'>
      <span class={status === 'red' ? "red dot" : status === 'yellow' ?  "yellow dot" : "green dot"} /> {statusText}
    </div>
    <form onSubmit={handleSubmit}>
      <input defaultValue="Warp speed!" className='userInput globalCentering' />
    </form>
    </div>
  );
}

export default App;
