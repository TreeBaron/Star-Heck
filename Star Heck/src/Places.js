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
    {
        'name': 'Engineering Classroom',
        'description': 'This classroom is filled with state-of-the-art equipment, where students learn how to operate and maintain starships.',
        'adjacentLocations': ['Starfleet Academy Courtyard']
    },
      {
        'name': 'Science Classroom',
        'description': 'This classroom is equipped with laboratories where students conduct experiments and learn about the laws of physics and the universe.',
        'adjacentLocations': ['Starfleet Academy Courtyard']
      },
      
      {
        'name': 'Command Training Room',
        'description': 'This room is equipped with holodecks that can simulate any leadership scenario, from a starship bridge to a diplomatic negotiation.',
        'adjacentLocations': ['Starfleet Academy Courtyard']
      },
      
      {
        'name': 'Language Lab',
        'description': 'This lab is equipped with computers that can teach students how to speak and understand different languages.',
        'adjacentLocations': ['Starfleet Academy Courtyard']
      },
      
      {
        'name': 'Medical Classroom',
        'description': 'This classroom is equipped with medical simulators and other equipment, where students learn how to treat injuries and diseases.',
        'adjacentLocations': ['Starfleet Academy Courtyard']
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
        description: 'The transporter room. The transporter chief nods at you, \'Hello Captain\'.',
        adjacentLocations: ['Enterprise Bridge', 'Enterprise Engineering', 'Enterprise Sickbay']
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
        vehicleEntrance: 'Enterprise Transporter Room'
    }
]