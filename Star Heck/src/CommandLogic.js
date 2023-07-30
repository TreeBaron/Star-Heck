/*
Command List:
fire (weapon) at (thing)
warp to (place)
set course for (place)
beam down
beam down with (person) and (person)
scan (thing)
combine (item) with (item)
beam up (person)
beam up away team
talk to (person)
talk to (ship)
communicator
attack (thing)
charm (person)
flirt (person)
kiss (person)
stun (person)
barter with (person)
buy from (person)
carry (body)
use (item)
take (item)
look
*/


export const notImplementedFunction = (input, gameContext) => 
{
    gameContext.setConsoleText(gameContext.consoleText+'\nCommand not yet programmed.');
    return gameContext;
};

export const commandFunctionDictionary = {
    'fire (thing) at (thing)' : notImplementedFunction,
    'warp to (thing)' : notImplementedFunction,
    'set course for (thing)' : notImplementedFunction,
    'beam down' : notImplementedFunction,
    'beam down with (thing) and (thing)' : notImplementedFunction,
    'scan (thing)' : notImplementedFunction,
    'combine (thing) with (thing)' : notImplementedFunction,
    'beam up (thing)' : notImplementedFunction,
    'beam up away team' : notImplementedFunction,
    'talk to (thing)' : notImplementedFunction,
    'communicator' : notImplementedFunction,
    'attack (thing)' : notImplementedFunction,
    'charm (thing)' : notImplementedFunction,
    'flirt (thing)' : notImplementedFunction,
    'kiss (thing)' : notImplementedFunction,
    'stun (thing)' : notImplementedFunction,
    'barter with (thing)' : notImplementedFunction,
    'buy from (thing)' : notImplementedFunction,
    'carry (thing)' : notImplementedFunction,
    'use (thing)' : notImplementedFunction,
    'take (thing)' : notImplementedFunction,
    'look' : notImplementedFunction,
};