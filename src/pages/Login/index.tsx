import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();

    //ERROR STATE
    const [isValid, setIsValid] = useState<Boolean>(false);
    const [emailValid, setEmailValid] = useState<String | undefined>();
    const [passwordValid, setPasswordValid] = useState<String | undefined>();

    const handleSubmit = () => {
        if (email && password) {
            setIsValid(false);
            setEmailValid(undefined);
            setPasswordValid(undefined);
            console.log('Email: ' + email);
            console.log('Password: ' + password);
        }

        if (!email || !password) {
            setIsValid(true);
            if (!email) {
                setEmailValid('Please enter your email!');
            } else {
                setEmailValid(undefined);
            }
            if (!password) {
                setPasswordValid('Please enter your password!');
            } else {
                setPasswordValid(undefined);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')}>
                <div className={cx('header')}>
                    <h1>Sign In</h1>
                    <div>Please login to use platform</div>
                </div>
                <div className={cx('form')}>
                    <div className={cx('item')}>
                        <span className="material-symbols-rounded">mail</span>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoFocus
                            required
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setEmail(e.currentTarget.value);
                            }}
                        />
                        {isValid && emailValid && (
                            <div className={cx('error')}>{emailValid}</div>
                        )}
                    </div>
                    <div className={cx('item')}>
                        <span className="material-symbols-rounded">lock</span>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {isValid && passwordValid && (
                            <div className={cx('error')}>{passwordValid}</div>
                        )}
                    </div>
                    <div className={cx('item-other')}>
                        <div className={cx('checkbox')}>
                            <input type="checkbox" id="rememberMeCheckbox" />
                            <label htmlFor="rememberMeCheckbox">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
