import classNames from 'classnames/bind';
import Title from '../Title';
import Wrapper from '../Wrapper';
import styles from './About.module.scss';

import { Container } from '@mui/system';

//Icon
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

//Interface
import { Contact } from '../../shared/types';

const cx = classNames.bind(styles);

type Props = {
    data: Contact;
};

function About({ data }: Props) {
    return (
        <div className={cx('wrapper')}>
            <Title title="About me" id="about"></Title>
            <div className={cx('container')}>
                <Container>
                    <div className={cx('about-container')}>
                        <Wrapper padding={12}>
                            <img
                                src="http://cv.toidicodedao.com/images/profile-img.jpg"
                                alt="avatar"
                            />
                        </Wrapper>
                        <Wrapper padding={30}>
                            <div>
                                <h2 className="title">SUMMARY</h2>
                                <div className={cx('about-content')}>
                                    <p>
                                        I'm Pham Huy Hoang, a full stack
                                        developer with
                                        <b>
                                            3 years of experience in .NET
                                            technologies
                                        </b>
                                        and{' '}
                                        <b>
                                            1 year of experience in MEAN stack
                                        </b>
                                        , with good knowledge of
                                        <i>
                                            {' '}
                                            Database Design, Design Pattern,
                                            Object-Oriented Analysis and Design.
                                        </i>
                                    </p>
                                    <p>
                                        Learning new languages and technologies
                                        is what I am passionate about (I
                                        self-taught Django with 3 weeks). I am
                                        considered a team-player because I like
                                        to help other and tend to work well
                                        within groups. I can also do some
                                        mentoring tasks and do code reviewing
                                        for other team members.
                                    </p>
                                    <p>
                                        I like helping other and work well with
                                        group. I can also do some mentoring
                                        tasks and code reviewing for other
                                        members (I also held a presentation
                                        about IoC and DI for my team).
                                    </p>
                                    <p>
                                        I am also the owner of an IT blog
                                        called: toidicodedao.com. My
                                        stackoverflow profile is among the top
                                        11% with more than 3k reps. My favorite
                                        books are: Clean Code, Head First Design
                                        Pattern, C# in Depth, Working with
                                        Legacy Code.
                                    </p>
                                </div>
                            </div>
                        </Wrapper>
                        <Wrapper padding={30}>
                            <div>
                                <h2 className="title">{data.title}</h2>
                                <ul className={cx('address-line')}>
                                    <li>
                                        <div className={cx('info')}>
                                            <PlaceIcon />
                                            <span>{data.address}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx('info')}>
                                            <LocalPhoneIcon />
                                            <span>{data.phone}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx('info')}>
                                            <EmailIcon />
                                            <a href={`mailto:${data.email}`}>
                                                {data.email}
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx('info')}>
                                            <PublicIcon />
                                            <a
                                                href={`https://${data.website}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {data.website}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Wrapper>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default About;
