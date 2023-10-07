import { Link } from 'react-scroll';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

//Icon
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SchoolIcon from '@mui/icons-material/School';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [show, setShow] = useState<boolean>(false);

    const handleShowMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShow(!show);
    };

    return (
        <div>
            <div className={cx('menu-btn')}>
                <button onClick={handleShowMenu}>
                    <MenuIcon />
                </button>
            </div>

            <div
                className={
                    show
                        ? cx('wrapper', 'wrapper-active')
                        : cx('wrapper', 'wrapper-static')
                }
            >
                <div className={cx('header')}>
                    <div className={cx('name')}>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <h1>HieuDD</h1>
                        </Link>
                    </div>
                    <div className={cx('menu')}>
                        <button onClick={handleShowMenu}>
                            <MenuIcon sx={{ fontSize: '2rem' }} />
                        </button>
                    </div>
                </div>
                <ul className={cx('sidebar')}>
                    <Link
                        activeClass={cx('active')}
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li className={cx('item')}>
                            <HomeIcon />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link
                        activeClass={cx('active')}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li className={cx('item')}>
                            <PersonIcon />
                            <span>About</span>
                        </li>
                    </Link>
                    <Link
                        activeClass={cx('active')}
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li className={cx('item')}>
                            <SignalCellularAltIcon />
                            <span>Skills</span>
                        </li>
                    </Link>
                    <Link
                        activeClass={cx('active')}
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li className={cx('item')}>
                            <EqualizerIcon />
                            <span>Experiences</span>
                        </li>
                    </Link>
                    <Link
                        activeClass={cx('active')}
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li className={cx('item')}>
                            <SchoolIcon />
                            <span>Education</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
