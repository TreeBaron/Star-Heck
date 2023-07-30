export const AllLocations = [
    {
        name: 'Earth Space Dock',
        description: 'From the window of space dock you can see the Earth far below. Behind you engineers and scientists zip by.',
        allowStarships: true,
        adjacentLocations: ['Starfleet Academy Courtyard']
    },
    {
        name: 'Starfleet Academy Courtyard',
        description: 'A large fountain adorns the center of the courtyard. Students casually walk by on their way to classes, tablets in hand. It\'s a beautiful day in San Francisco. In the distance you see shuttles flying past the Golden Gate bridge.',
        adjacentLocations: ['Earth Space Dock', 'Cybernetics Lab', 'Quantum Mechanics Classroom']
    },
    {
        name: 'Cybernetics Lab',
        description: 'Students work at various lab stations on robotic arms, while the instructor paces back and forth, watching their work.',
        adjacentLocations: ['Starfleet Academy Courtyard']
    },
    {
        name: 'Quantum Mechanics Classroom',
        description: 'The classroom is empty. On the display board a note says class has been cancelled.',
        adjacentLocations: ['Starfleet Academy Courtyard']
    },
];

export const AllPeople = [
    {
        name: 'Professor Kirby',
        description: 'A stout tellerite, he is rather short and has messed hair. Professor Kirby looks like he spends most of his time frowning.',
        location: 'Cybernetics Lab',
        items: ['Cybernetic Arm'],
        conversations: { 
            'What do you teach?' : 'I teach Cybernetics here at the Academy.',
            'Do you enjoy cybernetics?' : 'It is my life, but unfortunately few students have an appreciation for it.'
        }
    }
];

export const AllItems = [
    {
        name: 'Cybernetic Arm',
        description: 'A detached mechanical arm.',
        location: 'Cybernetics Lab'
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
        locationsWithin: [
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
           }
        ]
    }
]