import About from '../../components/About';
import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';
import SkillsComp from '../../components/Skills';
import { CONTACT_INFO } from '../../shared/contact';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Sidebar />
            <div className={cx('wrapper')}>
                <Header />
                <About data={CONTACT_INFO} />
                <SkillsComp />
                <Experience />
                <Education />
            </div>
        </div>
    );
}

export default Home;
