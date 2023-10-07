import classNames from 'classnames/bind';

import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);
type Props = {
    children?: JSX.Element;
    padding: Number;
};

const Wrapper: React.FC<Props> = ({ children, padding }) => {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('wrapper-content')}
                style={{ padding: `${padding}px` }}
            >
                {children}
            </div>
        </div>
    );
};

Wrapper.defaultProps = {
    children: undefined,
};

export default Wrapper;
