export interface Contact {
    title: String;
    address: String;
    phone: String;
    email: String;
    website: String;
}

export interface Skill {
    id: Number;
    title: String;
    skill: Array<String>;
}
export interface Skills {
    id: Number;
    skills: Array<Skill>;
}
