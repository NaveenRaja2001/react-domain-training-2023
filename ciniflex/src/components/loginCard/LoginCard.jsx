import React, { useEffect, useRef, useState } from 'react'
import Button from '../button/Button';
import Label from '../label/Label';
import InputTag from '../inputTag/InputTag';
import style from './LoginCard.module.scss';
import { LOGIN_PAGE } from '../../constants/pageConstant';
import { useNavigate } from 'react-router-dom';
import {LOGIN_CARD_CONSTANTS,BUTTON_CONSTANTS,NAVIGATION_CONSTANTS} from '../../constants/pageConstant'
import PropTypes from 'prop-types';

export const LoginCard = ({ setLoginStatus = () => {}},loginStatus) => {

    const navigate = useNavigate();
    const userNameRef = useRef(null)
  const passwordRef = useRef(null);
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    function handleSubmit(e) {  
        e.preventDefault()
        let email=userNameRef.current.value;
        let password=passwordRef.current.value;
        if (password.length === 0 || email.length === 0) {
            return;
        }
        
        setLoginStatus({isLoggedIn: true,name: email.slice(0, email.indexOf('@'))});
        localStorage.setItem('user', JSON.stringify({isLoggedIn: true, name:email.slice(0, email.indexOf('@'))}));

        navigate(NAVIGATION_CONSTANTS.HOME_PAGE);
    }

    return (
        <div className={style.loginCard}>
            <h2>
                {LOGIN_PAGE.TITLE}
            </h2>
            <p>
                {LOGIN_PAGE.DESCRIPTION}
            </p>
            <form onSubmit={handleSubmit} className={style.form}>
                <div>
                    <Label name={LOGIN_CARD_CONSTANTS.EMAIL_LABEL}/>
                    <InputTag ref={userNameRef}  type={LOGIN_CARD_CONSTANTS.EMAIL_INPUT_TYPE}  />
                </div>
                <div>
                    <Label name={LOGIN_CARD_CONSTANTS.PASSWORD_LABEL}/>
                    <InputTag ref={passwordRef}  type={LOGIN_CARD_CONSTANTS.PASSWORD_INPUT_TYPE} />
                </div>
                <Button name={BUTTON_CONSTANTS.LOGIN_BUTTON} style={style.loginButton}></Button>
            </form>
        </div>
    )
}

LoginCard.propTypes = {
    setLoginStatus: PropTypes.func.isRequired,
};

export default LoginCard;
