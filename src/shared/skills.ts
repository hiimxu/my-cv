import { Skill } from './types';

export const SKILL_ID: Array<{ skillId: Number }> = [
    { skillId: 1 },
    { skillId: 2 },
    { skillId: 3 },
];

export const SKILL_INFO: Array<Skill> = [
    {
        id: 1,
        skills: [
            {
                name: 'PROGRAMMING LANGUAGES',
                list: ['Javascript', 'HTML,CSS', 'Java'],
            },
            {
                name: 'FRAMEWORKS & PLATFORMS',
                list: [
                    'ReactJS / AngularJS ',
                    'Bootstrap / Material UI ',
                    'RestfulAPI ',
                ],
            },
        ],
    },
    {
        id: 2,
        skills: [
            { name: 'DATABASE', list: [] },
            {
                name: 'VERSION CONTROL',
                list: ['Git (Git Shell & Github)'],
            },
            { name: 'IDE', list: ['Visual Studio Code', 'Netbeans'] },
        ],
    },
    {
        id: 1,
        skills: [
            {
                name: 'KNOWLEDGE',
                list: [
                    'Understanding about OOP, Design Pattern, SOLID principles, Dependency Injection, ...',
                    'Understanding software design, database design, RestfulAPI, ...',
                    'Good time management, presentation and teamwork skills ...',
                ],
            },
        ],
    },
];
