import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { PerformCommand } from './CommandParser';

function App() {
  const [consoleText, setConsoleText] = useState('Welcome to Star Heck.\nCreated by John Dodd.');
  const [inputValue, setInputValue] = useState('Enter commands here.');
  const [gameContext, setGameContext] = useState(null);
  const [firstCommandRan, setFirstCommandRan] = useState(false);
  const [hintText, setHintText] = useState('Hint: Use \'go to 1\' or \'go to space dock\' to travel');
  const textArea = useRef();

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if(!gameContext) 
    {
      console.log('gameContext not set, called early abort.');
      return;
    }

    let input = `${inputValue}`;
    setInputValue('');

    if(gameContext.OverrideHandleSubmit)
    {
      console.log('Calling override.');
      let contextNew = gameContext.OverrideHandleSubmit(input, gameContext);
      setConsoleText('\n'+gameContext.queuedText);
      gameContext.queuedText = '';
      setGameContext(contextNew);
      return;
    }
    else
    {
      console.log('Override not called.');
    }

    let result = PerformCommand(input, gameContext);
    setGameContext(result);
    setConsoleText('\n'+gameContext.queuedText);
    gameContext.queuedText = '';
  };


  if(!gameContext)
  {
    setGameContext(
    {
      currentLocation: 'Starfleet Academy Courtyard',
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
        items: [],
        communicatorMessages: []
      },
      ship: {
        impulsePower: true,
        warpPower: true,
        phasers: true,
        photonTorpedos: true,
        shields: true,
        transporters: true,
        crew: 203
      },
      mission: {
        name: 'The Dark Arrow',
        description: 'Deliver Colonists to a disputed planet on the border of Romulan space. The name of the planet: Dironia.'
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
    gameContext.hintText = hintText;
    gameContext.setHintText = setHintText;
  }

  // After render, this scrolls the textArea to the bottom.
  useEffect(() => {
    const area = textArea.current;
    area.scrollTop = area.scrollHeight;

    if(firstCommandRan === false)
    {
      let result = PerformCommand('look', gameContext);
      setGameContext(result);
      setConsoleText(consoleText + '\n'+gameContext.queuedText);
      gameContext.queuedText = '';
      setFirstCommandRan(true);
    }
  });

  return (
    <div className='everything'>
    <textarea value={consoleText} readOnly={true} onChange={() => console.log('change')} className="textFeed globalCentering" ref={textArea}/>
    <div className='statusDisplay globalCentering'>
      {hintText}
    </div>
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='userInput globalCentering' />
    </form>
    </div>
  );
}

export default App;
