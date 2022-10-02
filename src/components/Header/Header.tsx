import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//Material
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

//Material Icon
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const cx = classNames.bind(styles);

const iconStyle = {
    color: 'white',
    fontSize: '2.2rem',
    margin: '3px',
};

function Header() {
    return (
        <div className={cx('wrapper')} id="/">
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h1>I'm Duong Duc Hieu</h1>
                    <h3>A Front end Developer</h3>
                </div>
                <div className={cx('contact')}>
                    <div>
                        <Tooltip title="Github" placement="bottom">
                            <IconButton
                                href="https://github.com/hiimxu"
                                target="_blank"
                            >
                                <GitHubIcon sx={iconStyle} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="Facebook" placement="bottom">
                            <IconButton
                                href="https://www.facebook.com/hieu.duong.707/"
                                target="_blank"
                            >
                                <FacebookIcon sx={iconStyle} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
