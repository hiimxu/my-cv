import classNames from 'classnames/bind';
import styles from './Experience.module.scss';

import Title from '../Title';
import Wrapper from '../Wrapper';
import { Container } from '@mui/system';

const cx = classNames.bind(styles);

function Experience() {
    return (
        <div className={cx('wrapper')}>
            <Title title="Experiences" id="experience" />
            <Container>
                <Wrapper padding={30}>
                    <div className={cx('container')}>
                        <div className={cx('content-left')}>
                            <div className={cx('title')}>
                                <h3>Intern Front-end Developer</h3>
                                <p>FPT Software Ha Noi</p>
                            </div>
                            <div className={cx('time')}>
                                <p>1/2020</p> <p>-</p> <p>4/2020</p>
                            </div>
                        </div>
                        <div className={cx('content-right')}>
                            <ul>
                                <li>
                                    <strong>Project</strong>: Employee
                                    Management System
                                </li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Experience;
