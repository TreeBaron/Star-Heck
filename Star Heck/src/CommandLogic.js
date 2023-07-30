import { AllLocations } from "./Places";

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


const getLocation = (name) =>
{
    return AllLocations.find(x => x.name === name);
}

const getCurrentLocation = (gameContext) =>
{
    return AllLocations.find(x => x.name === gameContext.currentLocation);
}

const getAdjacentLocations = (gameContext) => {
    let currentLocation = getCurrentLocation(gameContext);
    let adjacentPlaces = currentLocation.adjacentLocations.map(x => getLocation(x));
    return adjacentPlaces;
}

export const notImplementedFunction = (input, gameContext) => 
{
    gameContext.print('Command not yet programmed.');
    return gameContext;
};

const look = (input, gameContext) => 
{
    gameContext.print(getCurrentLocation(gameContext).description);
    gameContext.print('Nearby Locations: \n');
    
    let travelPlaces = getAdjacentLocations(gameContext);
    for(let i = 0; i < travelPlaces.length; i++)
    {
        gameContext.print('['+(i+1)+'] - '+travelPlaces[i].name);
    }

    return gameContext;
}

const beamDown = (input, gameContext) => 
{
    let travelPlaces = getAdjacentLocations(gameContext);
    let selected = travelPlaces[0];
    for(let i = 0; i < travelPlaces.length; i++)
    {
        if(input.includes(travelPlaces[i].name))
        {
            selected = travelPlaces[i];
        }
    }
    gameContext.print('>> You beam down to '+selected.name+'\n');
    gameContext.print(selected.description);
    gameContext.currentLocation = selected.name;
    return gameContext;
}

export const commandWordDictionary = [
    'and',
    'attack',
    'away',
    'barter',
    'beam',
    'buy',
    'carry',
    'charm',
    'combine',
    'communicator',
    'course',
    'down',
    'fire',
    'flirt',
    'for',
    'from',
    'kiss',
    'scan',
    'set',
    'stun',
    'take',
    'talk',
    'team',
    'to',
    'up',
    'use',
    'warp',
    'with'
    ];

export const commandFunctionDictionary = {
    'fire (thing) at (thing)' : notImplementedFunction,
    'warp to (thing)' : notImplementedFunction,
    'set course for (thing)' : notImplementedFunction,
    'beam down' : beamDown,
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
    'look' : look,
};