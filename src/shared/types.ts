export interface Contact {
    title: String;
    address: String;
    phone: String;
    email: String;
    website: String;
}

export interface SkillInfo {
    name: String;
    list: Array<String>;
}

export interface Skill {
    id: Number;
    skills: Array<SkillInfo>;
}
