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
                    'Nextjs / NuxtJs / Angular',
                    'Bootstrap / Material UI / PrimeNG / TailwindCss / Ant Design',
                    'RestfulAPI / GraphQL',
                    'Redux / React Admin',
                    'Axios / Apollo',
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
            { name: 'IDE', list: ['Visual Studio Code'] },
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
