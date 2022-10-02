import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

type Props = {
    title: String;
    id: String;
};

const Title = ({ title, id }: Props) => {
    return (
        <div className={cx('heading')} id={`${id}`}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;
