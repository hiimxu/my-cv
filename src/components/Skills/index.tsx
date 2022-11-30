import React from 'react';
import { Container } from '@mui/system';
import Title from '../Title';
import Wrapper from '../Wrapper';

import classNames from 'classnames/bind';
import styles from './Skills.module.scss';
import { Skill, SkillInfo } from '../../models/types';
import { SKILL_INFO } from '../../shared/skills';

const cx = classNames.bind(styles);

type ListSkillIdProps = {
    data: Array<Skill>;
};

type ListSkillProps = {
    data: Array<SkillInfo>;
};

const ListSkill = ({ data }: ListSkillProps) => {
    return (
        <>
            {data?.map((skill, index) => (
                <div key={index} className={cx('content')}>
                    <h2 className="title">{`${skill.name}`}</h2>
                    <ul>
                        {skill.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

const SkillWrapper = ({ data }: ListSkillIdProps) => {
    return (
        <>
            {data.map((list, index) => (
                <div key={index} className={cx('container-item')}>
                    <Wrapper padding={30}>
                        <div className={cx('content')}>
                            <ListSkill data={list.skills} />
                        </div>
                    </Wrapper>
                </div>
            ))}
        </>
    );
};

function SkillsComp() {
    return (
        <div className={cx('wrapper')}>
            <Title title="Skills" id="skill" />
            <Container>
                <div className={cx('container')}>
                    <SkillWrapper data={SKILL_INFO} />
                </div>
            </Container>
        </div>
    );
}

export default SkillsComp;
