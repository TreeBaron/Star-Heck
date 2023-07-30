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
        adjacentLocations: ['Starfleet Academy Courtyard', 'Cybernetics Lab']
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
        description: 'The warp core hums quietly. Technicians sit at their stations monitoring the flow of anti-matter.',
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
                }
            }
        ]
    }
];

export const AllConditionals = [
    {
        location: 'Earth Space Dock',
        onEnterRoom: true,
        triggerLogic: (gameContext) => {
            if(gameContext.player.inventory.find(x => x.name === 'Self Sealing Stem Bolt Box'))
            {
                let spaceDock = getLocation('Earth Space Dock');
                spaceDock.adjacentLocations.push('Enterprise Transporter Room')
                gameContext.print('>> You message Scotty you have the bolts.')
                gameContext.print('Scotty: Excellent work captain! I\'ll have her ready to be underway in a jiffy.');
            }
            else
            {
                const scottysMessage = 'Scotty: Captain, we have a real problem with the transporter here. I can fix it and we can get underway just as soon as I get some self-sealing stem bolts.';
                gameContext.print('>> Your communicator chirps.')
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
        name: 'Enterprise NCC 1701',
        description: 'A constituition class starship.',
        shieldsUp: true,
        impulsePower: true,
        warpPower: true,
        phasers: true,
        photonTorpedos: true,
        location: 'Earth Space Dock',
        vehicleEntrance: 'Enterprise Transporter Room'
    }
]