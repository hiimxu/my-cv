import { Container } from '@mui/system';
import Title from '../Title';
import Wrapper from '../Wrapper';

import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

function Skills() {
    return (
        <div className={cx('wrapper')}>
            <Title title="Skills" id="skill" />
            <Container>
                <div className={cx('container')}>
                    <div className={cx('container-item')}>
                        <Wrapper padding={30}>
                            <div className={cx('content')}>
                                <h2 className="title">PROGRAMMING LANGUAGES</h2>
                                <ul>
                                    <li>Javascript</li>
                                    <li>HTML,CSS</li>
                                    <li>Java</li>
                                </ul>
                                <h2 className="title">
                                    FRAMEWORKS &amp; PLATFORMS
                                </h2>
                                <ul>
                                    <li>ReactJS / AngularJS / NodeJS</li>
                                    <li>
                                        jQuery / Twitter Bootstrap / Materialize
                                        CSS
                                    </li>
                                    <li>RestfulAPI / JSON, XML</li>
                                </ul>
                            </div>
                        </Wrapper>
                    </div>
                    <div className={cx('container-item')}>
                        <Wrapper padding={30}>
                            <div className={cx('content')}>
                                <h2 className="title">DATABASE</h2>
                                <ul>
                                    <li>Microsoft SQL</li>
                                    <li>MySQL</li>
                                    <li>MySQL</li>
                                </ul>
                                <h2 className="title">VERSION CONTROL</h2>
                                <ul>
                                    <li>Git (Git Shell &amp; Github)</li>
                                    <li>Team Foundation Server</li>
                                </ul>
                                <h2 className="title">IDE</h2>
                                <ul>
                                    <li>Visual Studio</li>
                                    <li>Netbeans</li>
                                </ul>
                            </div>
                        </Wrapper>
                    </div>
                    <div className={cx('container-item')}>
                        <Wrapper padding={30}>
                            <div className={cx('content')}>
                                <h2 className="title">KNOWLEDGE</h2>
                                <ul>
                                    <li>
                                        Deep understanding about OOP, Design
                                        Pattern, SOLID principles, Dependency
                                        Injection, ...
                                    </li>
                                    <li>
                                        Good understanding about the Agile and
                                        Scrum process
                                    </li>
                                    <li>
                                        Good understanding software design,
                                        database design, RestfulAPI, ...
                                    </li>
                                    <li>
                                        Good time management, presentation and
                                        teamwork skills ...
                                    </li>
                                </ul>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Skills;
