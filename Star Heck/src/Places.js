import { getLocation } from "./CommandLogic";

export const AllLocations = [
    {
        name: 'Earth Space Dock',
        description: 'From the window of space dock you can see the Earth far below. Behind you engineers and scientists zip by.',
        inSpace: true,
        adjacentLocations: ['Starfleet Academy Courtyard']
    },
    {
        name: 'Starfleet Academy Courtyard',
        description: 'A large fountain adorns the center of the courtyard. Students casually walk by on their way to classes, tablets in hand. It\'s a beautiful day in San Francisco. In the distance you see shuttles flying past the Golden Gate bridge.',
        adjacentLocations: ['Earth Space Dock', 'Cybernetics Lab']
    },
    {
        name: 'Cybernetics Lab',
        description: 'Students work at various lab stations on robotic arms, while the instructor paces back and forth, watching their work.',
        adjacentLocations: ['Starfleet Academy Courtyard', 'Quantum Mechanics Classroom', 'Engineering Classroom']
    },
    {
        name: 'Quantum Mechanics Classroom',
        description: 'The classroom is empty. On the display board a note says class has been cancelled.',
        adjacentLocations: ['Starfleet Academy Courtyard', 'Cybernetics Lab']
    },
    {
        name: 'Engineering Classroom',
        description: 'This classroom is filled with state-of-the-art equipment, where students learn how to operate and maintain starships.',
        adjacentLocations: ['Starfleet Academy Courtyard', 'Cybernetics Lab'],
        hint: 'Hint: You can use the search command to search for items in rooms.'
    }, 
      {
        name: 'Enterprise Bridge',
        description: 'You step onto the Enterprise\'s bridge. Officers sit at their stations monitoring the situation.',
        adjacentLocations: ['Enterprise Engineering', 'Enterprise Sickbay']
    },
    {
         name: 'Enterprise Engineering',
         description: 'The warp core hums quietly. Technicians sit at their stations monitoring the flow of anti-matter.',
         adjacentLocations: ['Enterprise Bridge', 'Enterprise Sickbay']
    },
    {
        name: 'Enterprise Sickbay',
        description: 'It\'s quiet here except for some nurces chatting in the backroom. Strange vials line the walls.',
        adjacentLocations: ['Enterprise Bridge', 'Enterprise Engineering']
    },
    {
        name: 'Enterprise Transporter Room',
        description: 'The transporter chief nods at you, \'Hello Captain\'.',
        adjacentLocations: ['Enterprise Bridge', 'Enterprise Engineering', 'Enterprise Sickbay']
    },
];

export const AllPeople = [
    {
        name: 'Professor Kirby',
        description: 'A stout tellerite, he is rather short and has messed hair. Professor Kirby looks like he spends most of his time frowning.',
        location: 'Cybernetics Lab',
        items: ['Cybernetic Arm'],
        conversations: [
            { 
                question: 'What do you teach?',
                answer:'I teach Cybernetics here at the Academy.',
            },
            {
                question: 'Do you know where I can get some self-sealing stem bolts?',
                answer: 'I would try the Engineering classroom. There\'s usually some there.'
            },
            {
                question: 'Can I have a cybernetic arm to play with?',
                answer: 'Sure, it must get boring being on a starship all the time huh?',
                action: (gameContext) => {
                    let arm = AllItems.find(x => x.name === 'Cybernetic Arm');
                    gameContext.player.items.push(arm);
                },
                doNotRepeat: true,
            }
        ]
    },
    {
        name: 'Scotty',
        description: 'A Scottish alcoholic who\'s really good at engineering for some reason.',
        location: 'Enterprise Engineering',
        conversations: [
            { 
                question: 'How\'s it going?',
                answer:'I could use a drink.',
            },
            {
                question: 'Can we get more power out of the engines? Maybe 200% power?',
                answer: 'Captain! I cannah change the laws of physics.'
            },
            {
                question: 'What exactly is a self-sealing stem bolt?',
                answer: 'Captain, if I have to explain the bare-bone basics of every physical contraption and mechanical widget on the ship we\'ll be here all day.\n\nYou: Sorry I asked...'
            }
        ]
    },
    {
        name: 'Spock',
        description: 'A talented half human, half vulcan science officer.',
        location: 'Enterprise Bridge',
        conversations: [
            {
                question: 'Would you like to play chess?',
                answer: 'Perhaps later captain, I have several important tasks I wish to accomplish.'
            },
            {
                question: 'Live long and prosper.',
                answer: 'And to you captain.'
            },
        ]
    },
    {
        name: 'Bones',
        description: 'A talented surgeon and medical officer. Good with the ladies, great with his hands.',
        location: 'Enterprise Sickbay',
        conversations: [
            { 
                question: 'How goes it Bones?',
                answer:'Well I can\'t complain Jim.',
            },
            {
                question: 'Do you think you can help Scotty in engineering later?',
                answer: 'Dammit Jim I\'m a doctor not a miracle worker.'
            },
            {
                question: 'Live long and prosper.',
                answer: 'Stuff it.'
            },
            {
                question: 'What is the crew status?',
                answer: 'The crew is mostly chipper after shore-leave. There\'s a couple cases of an Andorian flu but nothing I can\'t fix.'
            },
        ]
    },
    {
        name: 'Chekov',
        description: 'A young Russian officer.',
        location: 'Enterprise Bridge',
        conversations: [
            { 
                question: 'Report ship status.',
                answer:'Aye captain!',
                action: (gameContext) =>
                {
                    gameContext.print('Captain, we have '+gameContext.ship.crew+' crew aboard.')

                    if(gameContext.ship.impulsePower && gameContext.ship.warpPower && gameContext.ship.transporters && gameContext.ship.phasers 
                        && gameContext.ship.photonTorpedos && gameContext.ship.shields)
                    {
                        gameContext.print('All systems are fully operational captain.');
                    }
                    else
                    {
                        if(!gameContext.ship.impulsePower)
                        {
                            gameContext.print('Impulse engines are down captain.');
                        }

                        if(!gameContext.ship.warpPower)
                        {
                            gameContext.print('Our warp drive is offline.');
                        }

                        if(!gameContext.ship.phasers)
                        {
                            gameContext.print('Our phasers are not responding.');
                        }

                        if(!gameContext.ship.photonTorpedos)
                        {
                            gameContext.print('We cannot launch photon torpedos.');
                        }

                        if(!gameContext.ship.shields)
                        {
                            gameContext.print('Captain our shields are down!');
                        }

                        if(!gameContext.ship.transporters)
                        {
                            gameContext.print('We are unable to use transporters captain.');
                        }
                    }
                }
            },
            {
                question: 'Mr Checkov, what exactly is our current mission?',
                answer: 'Of course captain, our current mission is this.',
                action: (gameContext) => {
                    gameContext.print(gameContext.mission.description);
                    gameContext.print('Captain, I like to call this mission \''+gameContext.mission.name+'\'\n');
                    gameContext.print('You: Thank you Mr. Checkov but we can do without the commentary.\n');
                    gameContext.print('Checkov: Aye, captain.\n');
                }
            }
        ]
    },
];

export const AllConditionals = [
    {
        location: 'Earth Space Dock',
        onEnterRoom: true,
        triggerLogic: (gameContext) => {
            if(gameContext.player.items.find(x => x.name === 'Self Sealing Stem Bolt Box'))
            {
                let spaceDock = getLocation('Earth Space Dock', gameContext);
                spaceDock.adjacentLocations.push('Enterprise Transporter Room')
                gameContext.print('\n>> You message Scotty you have the bolts.\n')
                gameContext.print('Scotty: Excellent work captain! I\'ll have her ready to be underway in a jiffy.');
            }
            else
            {
                const scottysMessage = 'Scotty: Captain, we have a real problem with the transporter here. I can fix it and we can get underway just as soon as I get some self-sealing stem bolts. Someone traded our supply for a case of Sorian brandy.\nYou: Someone Scotty?\nScotty: Aye, captain...';
                gameContext.print('\n>> Your communicator chirps.')
                gameContext.communicatorMessages.push(scottysMessage);
            }
        }
    }
];

export const AllItems = [
    {
        name: 'Cybernetic Arm',
        description: 'A detached mechanical arm.'
    },
    {
        name: 'Self Sealing Stem Bolt Box',
        description: 'A box of self sealing stem bolts.',
        location: 'Engineering Classroom'
    }
];

export const AllVehicles = [
    {
        name: 'Constellation NCC 1432',
        description: 'A constitution class starship.',
        impulsePower: true,
        warpPower: true,
        phasers: true,
        photonTorpedos: true,
        shields: true,
        transporters: true,
        location: 'Earth Space Dock',
        vehicleEntrance: 'Enterprise Transporter Room'
    }
]