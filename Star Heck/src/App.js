import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { PerformCommand } from './CommandParser';

function App() {

  const [consoleText, setConsoleText] = useState('Welcome to Star Heck.\nCreated by John Dodd.');
  const [inputValue, setInputValue] = useState('Enter commands here.');
  const [gameContext, setGameContext] = useState(null);
  const textArea = useRef();

  if(!gameContext)
  {
    setGameContext(
    {
      currentLocation: 'Earth Space Dock',
      player: {
        name: 'James T. Kirk',
        description: 'Starfleet\'s finest.',
        health: 100,
        maxHealth: 100,
        leadership: 5,
        maxLeadership: 10,
        engineering: 5,
        maxEngineering: 10,
        science: 5,
        maxScience: 10,
        combat: 5,
        maxCombat: 10,
      }
    });
  }

  if(gameContext)
  {
    gameContext.setInputValue = setInputValue;
    gameContext.setConsoleText = setConsoleText;
    gameContext.inputValue = inputValue;
    gameContext.consoleText = consoleText;
    gameContext.queuedText = '';
    gameContext.print = (text) => {
      gameContext.queuedText += '\n'+text;
    }
  }


  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if(!gameContext) return;

    let input = inputValue;

    setConsoleText(consoleText + '\n>> '+inputValue);
    setInputValue('');

    let result = PerformCommand(input, gameContext);
    setGameContext(result);
    setConsoleText(consoleText + '\n'+gameContext.queuedText);
    gameContext.queuedText = '';
  }

  let statusText = 'Green Alert. All is normal.';
  let statusColor = 'green';
  let status = 'green';

  // After render, this scrolls the textArea to the bottom.
  useEffect(() => {
    const area = textArea.current;
    area.scrollTop = area.scrollHeight;
  });

  return (
    <div className='everything'>
    <textarea value={consoleText} readOnly={true} onChange={() => console.log('change')} className="textFeed globalCentering" ref={textArea}/>
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
