export const theDarkArrow = 
{
    name: 'The Dark Arrow',
    description: 'Deliver Colonists to a disputed planet on the border of Romulan space. The name of the planet: Dironia.',
    allLocations: [],
    allPeople: [
        {
            name: 'Mi\'lock The Vulcan',
            description: 'He wears dark robes, and is unusually short.',
            location: 'Starfleet Academy Courtyard',
            conversations: [
                { 
                    question: 'What\'s your name?',
                    answer:'I am Mi\'lock the vulcan.',
                },
                {
                    question: 'Beautiful day.',
                    answer: 'Not really.'
                }
            ]
        },
    ],
    allConditionals: [
        {
            person: 'Mi\'lock The Vulcan',
            onScan: true,
            triggerLogic: (gameContext) => {
                gameContext.print('>> Mi\'lock is a Romulan!');
                gameContext.print('Mi\'lock The Romulan: You win this one Starfleet.\n\n>> He grumbles, presses a button on his belt and beams away.\n\n>> You report the incident to security.');

                gameContext.allPeople = gameContext.allPeople.filter(x => x.name != 'Mi\'lock The Vulcan');
            }
        }
    ],
    allItems: [],
    allVehicles: [],
    allConversations: [{
        person: 'Spock',
        question: 'I found a Romulan spy disguised as a vulcan earlier.',
        answer: 'Curious captain. I wonder if the spy is related to our current mission.',
        action: () => {
            
        }
    }],
}