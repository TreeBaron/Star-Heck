import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { PerformCommand } from './CommandParser';
import { addToArray, setCurrentMission } from './Missions/Controller';
import { theDarkArrow } from './Missions/TheDarkArrow';
import { AllItems, AllLocations, AllPeople, AllVehicles, AllConditionals } from './Places';

function App() {
  const [consoleText, setConsoleText] = useState('Welcome to Star Heck.\nCreated by John Dodd.');
  const [inputValue, setInputValue] = useState('Enter commands here.');
  const [firstCommandRan, setFirstCommandRan] = useState(false);
  const [hintText, setHintText] = useState('Hint: Use \'go to 1\' or \'go to space dock\' to travel');
  const textArea = useRef();
  const [gameContext, setGameContext] = useState({
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
    },
    ship: {
      name: 'Enterprise NCC 1701',
      description: 'A constitution class starship.',
      impulsePower: true,
      warpPower: true,
      phasers: true,
      photonTorpedos: true,
      shields: true,
      transporters: true,
      crew: 203
    },
    mission: theDarkArrow,
    communicatorMessages: [],
    allLocations: [],
    allPeople: [],
    allConditionals: [],
    allItems: [],
    allVehicles: [],
    setInputValue: setInputValue,
    setConsoleText: setConsoleText,
    inputValue: inputValue,
    consoleText: consoleText,
    queuedText: '',
    print: (text) => {
      gameContext.queuedText += '\n'+text;
    },
    hintText: hintText,
    setHintText: setHintText,
  });

  if(!gameContext.currentLocation) return (<h1>Loading...</h1>);

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

  // After render, this scrolls the textArea to the bottom.
  useEffect(() => {
    const area = textArea.current;
    area.scrollTop = area.scrollHeight;

    // code order!
    if(gameContext.allLocations.length === 0)
    {
      addToArray(gameContext.allLocations, AllLocations);
      addToArray(gameContext.allPeople, AllPeople);
      addToArray(gameContext.allConditionals, AllConditionals);
      addToArray(gameContext.allItems, AllItems);
      addToArray(gameContext.allVehicles, AllVehicles);
      setCurrentMission(theDarkArrow, gameContext);
    }

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
