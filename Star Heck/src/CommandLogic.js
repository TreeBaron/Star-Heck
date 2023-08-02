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


export const getLocation = (name, gameContext) =>
{
    return gameContext.allLocations.find(x => x.name === name);
}

export const getItemsInLocation = (gameContext) =>
{
    let itemsInPlace = [];
    for(let i = 0; i < gameContext.allItems.length; i++)
    {
        if(gameContext.currentLocation === gameContext.allItems[i].location)
        {
            itemsInPlace.push(gameContext.allItems[i]);
        }
    }
    return itemsInPlace;
}

export const getPeopleInLocation = (gameContext) =>
{
    let peopleInPlace = [];
    for(let i = 0; i < gameContext.allPeople.length; i++)
    {
        if(gameContext.currentLocation === gameContext.allPeople[i].location)
        {
            peopleInPlace.push(gameContext.allPeople[i]);
        }
    }
    return peopleInPlace;
}

export const getConditionalsInLocation = (gameContext) =>
{
    let conditionals = [];
    for(let i = 0; i < gameContext.allConditionals.length; i++)
    {
        if(gameContext.currentLocation === gameContext.allConditionals[i].location)
        {
            conditionals.push(gameContext.allConditionals[i]);
        }
    }
    return conditionals;
}

export const getCurrentLocation = (gameContext) =>
{
    return gameContext.allLocations.find(x => x.name === gameContext.currentLocation);
}

export const getAdjacentLocations = (gameContext) => {
    let currentLocation = getCurrentLocation(gameContext);
    let adjacentPlaces = currentLocation.adjacentLocations.map(x => getLocation(x, gameContext));
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
        gameContext.print('>> You flip open your communicator.');
        gameContext.print(gameContext.communicatorMessages[0]);
        gameContext.communicatorMessages.shift();
    }
    else
    {
        gameContext.print('>> You flip open your communicator.>> Captain\'s log...I still don\'t know what I\'m doing in command.'); 
        gameContext.print('Captain\'s log...I still don\'t know what I\'m doing in command.'); 
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
    gameContext.player.items.push(selected);

    gameContext.print('>> You pick up '+selected.name);

    return gameContext;
}

const search = (input, gameContext) =>
{
    let items = getItemsInLocation(gameContext);
    if(items.length >= 1)
    {
        gameContext.print('\nFound Item(s):');
        for(let i = 0; i < items.length; i++)
        {
            gameContext.print('['+(i+1)+'] - '+items[i].name);
        }
    }

    return gameContext;
}

const look = (input, gameContext) => 
{
    gameContext.print(getCurrentLocation(gameContext).description);
    
    let people = getPeopleInLocation(gameContext);
    for(let i = 0; i < people.length; i++)
    {
        gameContext.print('You may speak to '+people[i].name);
    }

    gameContext.print('\nNearby Locations:');
    
    let travelPlaces = getAdjacentLocations(gameContext);
    for(let i = 0; i < travelPlaces.length; i++)
    {
        gameContext.print('['+(i+1)+'] - '+travelPlaces[i].name);
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
        const overrideFunction = (input, gameContext) => 
        {
            let saidSomething = false;
            gameContext.setInputValue('');

            if(input.toLowerCase() == 'exit' || input.toLowerCase() == 'bye' || input.toLowerCase() == 'goodbye')
            {
                gameContext.print('>> You say goodbye.');
                gameContext.OverrideHandleSubmit = null;
                return look(input, gameContext);
            }
            else
            {
                gameContext.OverrideHandleSubmit = overrideFunction;
                for(let i = 0; i < selected.conversations.length; i++)
                {
                    if(input == (i+1))
                    {
                        gameContext.print('>> You may continue the conversation or say goodbye.');
                        for(let i = 0; i < selected.conversations.length; i++)
                        {
                            gameContext.print('['+(i+1)+'] - '+selected.conversations[i].question);
                        }
                        gameContext.print('');

                        gameContext.setInputValue('');
                        gameContext.print('You: '+selected.conversations[i].question);
                        gameContext.print(selected.name+': '+selected.conversations[i].answer);
                        if(selected.conversations[i].action)
                        {
                            selected.conversations[i].action(gameContext);
                        }

                        if(selected.conversations[i].doNotRepeat)
                        {
                            selected.conversations[i] = null;
                            selected.conversations = selected.conversations.filter((x) => x !== null);
                        }


                        saidSomething = true;
                    }
                }
            }
            
            if(!saidSomething)
            {
                gameContext.print('>> You may continue the conversation or say goodbye.');
                for(let i = 0; i < selected.conversations.length; i++)
                {
                    gameContext.print('['+(i+1)+'] - '+selected.conversations[i].question);
                }
                gameContext.print('');
            }

            return gameContext;
        };

        gameContext.OverrideHandleSubmit = overrideFunction;
    }
    else
    {
        gameContext.print('>> They won\'t speak to you.');
        return gameContext;
    }

    return gameContext;
}

const say = (input, gameContext) =>
{
    gameContext.print(input.replace('say ','You: '));
    return gameContext;
}

const isLike = (text, text2) =>
{
    text = text.toLowerCase();
    text2 = text.toLowerCase();

    if(text == text2) return true;

    if(text.includes(text2)) return true;

    let sortedText = text.sort();
    let sortedText2 = text.sort();
    let score = 0;
    for(let i = 0; i < sortedText.length; i++)
    {
        if(sortedText[i] === sortedText2[i])
        {
            score++;
        }
    }

    if(score > sortedText.length / 2)
    {
        return true;
    }
    
    return false;
    
}

const scan = (input, gameContext) => {

    gameContext.print('>> You pull out your tricorder.');
    let people = getPeopleInLocation(gameContext);
    let selectedPerson = null;
    for(let i = 0; i < people.length; i++)
    {   
        if(isLike(input, people[i].name))
        {
            selectedPerson = people[i];
        }
    }
    
    if(selectedPerson)
    {
        gameContext.print('>> Scanning '+selectedPerson.name+'...');
        let allConditionals = gameContext.allConditionals;
        for(let i = 0; i < allConditionals.length; i++)
        {
            if(allConditionals[i].person === selectedPerson.name && allConditionals[i].onScan)
            {
                allConditionals[i].triggerLogic(gameContext);
            }
        }
    }

    return gameContext;

    //todo: add other types to scan.

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

    if(selected.hint)
    {
        gameContext.setHintText(selected.hint);
    }

    let people = getPeopleInLocation(gameContext);
    for(let i = 0; i < people.length; i++)
    {
        gameContext.print('You may speak to '+people[i].name);
    }

    gameContext.print('\nNearby Locations:');
    
    travelPlaces = getAdjacentLocations(gameContext);
    for(let i = 0; i < travelPlaces.length; i++)
    {
        gameContext.print('['+(i+1)+'] - '+travelPlaces[i].name);
    }


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
    'with',
    'say',
    'scan'
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
    'talk':talk,
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
    'search' : search,
    'go to (thing)' : goTo,
    'say (thing)' : say,
    'scan (thing)' : scan,
};