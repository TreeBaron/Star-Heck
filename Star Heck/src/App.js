import React, { useState } from 'react';
import './App.css';
import { tokenize } from './CommandParser';

function App() {

  const [consoleText, setConsoleText] = useState('Welcome to Star Heck.\nCreated by John Dodd.');
  const [inputValue, setInputValue] = useState('Enter commands here.');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    let input = inputValue;

    setConsoleText(consoleText + '\n>> '+inputValue);
    setInputValue('');

    let tokenized = tokenize(input);
    let tokenText = '';
    for(let i = 0; i < tokenized.length; i++)
    {
      tokenText += '\n'+tokenized[i];
    }
    setConsoleText(consoleText + tokenText);

  }

  let statusText = 'Red Alert!';
  let statusColor = 'red';
  let status = 'red';

  return (
    <div className='everything'>
    <textarea value={consoleText} readOnly={true} onChange={() => console.log('change')} className="textFeed globalCentering"/>
    <div className='statusDisplay globalCentering'>
      <span class={status === 'red' ? "red dot" : status === 'yellow' ?  "yellow dot" : "green dot"} /> {statusText}
    </div>
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='userInput globalCentering' />
    </form>
    </div>
  );
}

export default App;
