import { Skills } from './types';

export const SKILL_INFO: Array<Skills> = [
    {
        id: 1,
        skills: [
            {
                id: 1,
                title: 'programing language',
                skill: ['Javascript', 'HTML,CSS', 'Java'],
            },
            {
                id: 2,
                title: 'FRAMEWORKS & PLATFORMS',
                skill: [
                    'ReactJS / AngularJS / NodeJS',
                    'jQuery / Twitter Bootstrap / Materialize CSS',
                    'RestfulAPI / JSON, XML',
                ],
            },
        ],
    },
    {
        id: 2,
        skills: [
            { id: 1, title: 'DATABASE', skill: ['Microsoft SQL', 'MySQL'] },
            {
                id: 2,
                title: 'VERSION CONTROL',
                skill: ['Git (Git Shell & Github)', 'Team Foundation Server'],
            },
            { id: 3, title: 'IDE', skill: ['Visual Studio', 'Netbeans'] },
        ],
    },
    {
        id: 1,
        skills: [
            {
                id: 1,
                title: 'KNOWLEDGE',
                skill: [
                    'Deep understanding about OOP, Design Pattern, SOLID principles, Dependency Injection, ...',
                    'Good understanding about the Agile and Scrum process',
                    'Good understanding software design, database design, RestfulAPI, ...',
                    'Good time management, presentation and teamwork skills ...',
                ],
            },
        ],
    },
];
