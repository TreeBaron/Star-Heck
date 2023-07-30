import { AllLocations, AllItems, AllConditionals, AllPeople } from "./Places";

/*
Command List:
fire (weapon) at (thing)
warp to (place)
set course for (place)
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
inventory
go to (place)
*/


export const getLocation = (name) =>
{
    return AllLocations.find(x => x.name === name);
}

export const getItemsInLocation = (gameContext) =>
{
    let itemsInPlace = [];
    for(let i = 0; i < AllItems.length; i++)
    {
        if(gameContext.currentLocation === AllItems[i].location)
        {
            itemsInPlace.push(AllItems[i]);
        }
    }
    return itemsInPlace;
}

export const getPeopleInLocation = (gameContext) =>
{
    let peopleInPlace = [];
    for(let i = 0; i < AllPeople.length; i++)
    {
        if(gameContext.currentLocation === AllPeople[i].location)
        {
            peopleInPlace.push(AllPeople[i]);
        }
    }
    return peopleInPlace;
}

export const getConditionalsInLocation = (gameContext) =>
{
    let conditionals = [];
    for(let i = 0; i < AllConditionals.length; i++)
    {
        if(gameContext.currentLocation === AllConditionals[i].location)
        {
            conditionals.push(AllConditionals[i]);
        }
    }
    return conditionals;
}

export const getCurrentLocation = (gameContext) =>
{
    return AllLocations.find(x => x.name === gameContext.currentLocation);
}

export const getAdjacentLocations = (gameContext) => {
    let currentLocation = getCurrentLocation(gameContext);
    let adjacentPlaces = currentLocation.adjacentLocations.map(x => getLocation(x));
    return adjacentPlaces;
}

export const notImplementedFunction = (input, gameContext) => 
{
    gameContext.print('Command not yet programmed.');
    return gameContext;
};

const communicator = (input, gameContext) => {
    if(gameContext.communicatorMessages.length >= 1)
    {
        gameContext.print('>> You flip open your communicator.\n');
        gameContext.print(gameContext.communicatorMessages[0]);
        gameContext.communicatorMessages.shift();
    }
    else
    {
        gameContext.print('>> You flip open your communicator.\n>> Captain\'s log...I still don\'t know what I\'m doing in command.'); 
    }

    return gameContext;
}

const take = (input, gameContext) =>
{
    input = input.toLowerCase();
    let items = getItemsInLocation(gameContext);
    if(items.length <= 0)
    {
        gameContext.print('>> There\'s nothing to take.');
        return gameContext;
    }

    let selected = items[0];
    for(let i = 0; i < items.length; i++)
    {
        if(input.includes(items[i].name.toLowerCase()))
        {
            selected = items[i];
        }
    }

    selected.location = undefined;
    gameContext.player.inventory.push(selected);

    gameContext.print('>> You pick up '+selected.name);

    return gameContext;
}

const look = (input, gameContext) => 
{
    gameContext.print(getCurrentLocation(gameContext).description);
    gameContext.print('\nNearby Locations:');
    
    let travelPlaces = getAdjacentLocations(gameContext);
    for(let i = 0; i < travelPlaces.length; i++)
    {
        gameContext.print('['+(i+1)+'] - '+travelPlaces[i].name);
    }

    let items = getItemsInLocation(gameContext);
    if(items.length >= 1)
    {
        gameContext.print('\nNearby Items:');
        for(let i = 0; i < items.length; i++)
        {
            gameContext.print('['+(i+1)+'] - '+items[i].name);
        }
    }


    return gameContext;
}

const talk = (input, gameContext) => {
    input = input.toLowerCase();
    let people = getPeopleInLocation(gameContext);

    if(people.length <= 0)
    {
        gameContext.print('>> You see no one you can talk to at the moment.');
        return gameContext;
    }

    let selected = people[0];
    for(let i = 0; i < people.length; i++)
    {
        if(input.includes(people[i].name.toLowerCase() || input.includes((i+1))))
        {
            selected = people[i];
        }
    }

    gameContext.print('>> You talk to '+selected.name);

    gameContext.print('');
    for(let i = 0; i < selected.conversations.length; i++)
    {
        gameContext.print('['+(i+1)+'] - '+selected.conversations[i].question);
    }

    if(selected.conversations.length >= 1)
    {
        gameContext.OverrideHandleSubmit = (input, gameContext) => 
        {
            gameContext.setConsoleText(gameContext.consoleText + '\n>> '+gameContext.inputValue);
            gameContext.setInputValue('');
            
            gameContext.print('');
            for(let i = 0; i < selected.conversations.length; i++)
            {
                gameContext.print('['+(i+1)+'] - '+selected.conversations[i].question);
            }
            gameContext.refresh();

            if(gameContext.inputValue.toLowerCase() == 'exit' || gameContext.inputValue.toLowerCase() == 'bye' || gameContext.inputValue.toLowerCase() == 'goodbye')
            {
                gameContext.print('>> You say goodbye.');
                gameContext.setHandleSubmit(null);
            }
            else
            {
                for(let i = 0; i < selected.conversations.length; i++)
                {
                    if(gameContext.inputValue == (i+1))
                    {
                        gameContext.setInputValue('');
                        gameContext.print(selected.conversations[i].answer);
                        if(selected.conversations[i].action)
                        {
                            selected.conversations[i].action();
                        }
                    }
                }
            }
            gameContext.print('');
    
        };
    }
    else
    {
        gameContext.print('>> They won\'t speak to you.');
        return gameContext;
    }

    return gameContext;
}

const beamDown = (input, gameContext) => 
{
    return commenceTravel(input, gameContext, '>> You beam down to (place).');
}


const beamUp = (input, gameContext) => 
{
    return commenceTravel(input, gameContext, '>> You beam up to (place).');
}

const goTo = (input, gameContext) => 
{
    return commenceTravel(input, gameContext, '>> You go to (place).\n');
}

const commenceTravel = (input, gameContext, message) =>
{
    input = input.toLowerCase();
    let travelPlaces = getAdjacentLocations(gameContext);
    let selected = travelPlaces[0];
    for(let i = 0; i < travelPlaces.length; i++)
    {
        if(input.includes(travelPlaces[i].name.toLowerCase()) || input.includes((i+1)))
        {
            selected = travelPlaces[i];
        }
    }
    gameContext.print(message.replace('(place)', selected.name));
    gameContext.print(selected.description);
    gameContext.currentLocation = selected.name;

    // trigger any relevant events
    let conditionals = getConditionalsInLocation(gameContext);
    for(let i = 0; i < conditionals.length; i++)
    {
        if(conditionals[i].onEnterRoom)
        {
            conditionals[i].triggerLogic(gameContext);
        }
    }

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
    'go',
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
    'beam up' : beamUp,
    'beam down with (thing) and (thing)' : notImplementedFunction,
    'scan (thing)' : notImplementedFunction,
    'combine (thing) with (thing)' : notImplementedFunction,
    'beam up (thing)' : notImplementedFunction,
    'beam up away team' : notImplementedFunction,
    'talk to (thing)' : talk,
    'communicator' : communicator,
    'attack (thing)' : notImplementedFunction,
    'charm (thing)' : notImplementedFunction,
    'flirt (thing)' : notImplementedFunction,
    'kiss (thing)' : notImplementedFunction,
    'stun (thing)' : notImplementedFunction,
    'barter with (thing)' : notImplementedFunction,
    'buy from (thing)' : notImplementedFunction,
    'carry (thing)' : notImplementedFunction,
    'use (thing)' : notImplementedFunction,
    'take (thing)' : take,
    'look' : look,
    'go to (thing)' : goTo
};