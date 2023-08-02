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
        {
            name: 'Dan Aldrin',
            description: 'He reminds you of a politician.',
            location: 'Enterprise Transporter Room',
            conversations: [
                { 
                    question: 'I understand you are the subject matter expert for this mission.',
                    answer:'Yes captain. I am here to make sure the colonists get a good start on a colony.',
                },
                {
                    question: 'What is the composition of the colonists?',
                    answer: 'Mostly vulcans, but some humans and tellerites are also a part. The Andorians find the planet much too hot, but I\'m told the Vulcans are expected to feel right at home there.',
                },
                {
                    question: 'Are you worried about being so close to the Romulan neutral zone?',
                    answer: 'It is of course a concern, but they don\'t claim this space as their own, so we expect no trouble.',
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

                let spock = gameContext.getPerson('Spock');
                spock.conversations.push({question: 'I found a Romulan spy disguised as a vulcan earlier.', answer: 'Curious captain. I wonder if the spy is related to our current mission.', missionAdded: true });
            }
        },
        {
            location: 'Enterprise Transporter Room',
            onEnterRoom: true,
            triggerLogic: (gameContext) => {
                gameContext.print('Dan Aldrin: Captain, I\'m Dan Aldrin the mission specialist. I\'ve been looking forwards to meeting you.');
                gameContext.print('>> You shake hands.');
            }
        }
    ],
    allItems: [],
    allVehicles: [],
    allConversations: [
    {
        person: 'Scotty',
        question: 'What was the problem with the transporter earlier?',
        answer: 'I hate to say it captain, but I think it may have been sabotaged.\n\nYou: Sabotage? On my ship? I want you to get to the bottom of this Scotty.\n\nScotty: Aye, captain. I\'ll do my best.',
        action: () => {
        }
    }
    ],
}