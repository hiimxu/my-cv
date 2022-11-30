import { Skill } from '../models/types';

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
                list: ['Javascript / TypeScript', 'HTML, CSS, SCSS', 'Java'],
            },
            {
                name: 'FRAMEWORKS & PLATFORMS',
                list: [
                    'ReactJS / Angular',
                    'Bootstrap / Material UI / PrimeNG',
                    'RestfulAPI',
                    'Redux / React Admin',
                ],
            },
        ],
    },
    {
        id: 2,
        skills: [
            { name: 'DATABASE', list: ['MongoDB'] },
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
