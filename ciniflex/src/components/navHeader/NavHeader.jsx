import React, { useContext } from 'react'
import Ciniflex_icon from '../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import style from './NavHeader.module.scss'
import NavigationLink from '../navigationLink/NavigationLink';
import Image from '../images/Image';
import { loginContext } from '../../App';
import {NAVIGATION_CONSTANTS,BUTTON_CONSTANTS} from '../../constants/pageConstant';

const NavHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { loginStatus, setLoginStatus } = useContext(loginContext);

    const logoutHandler = () => {
        setLoginStatus({ isLoggedIn: false, name: '' })
        navigate(NAVIGATION_CONSTANTS.HOME_PAGE)
    }
    return (
        <header className={style.navheader}>
            <Link to={NAVIGATION_CONSTANTS.HOME_PAGE}>
                <Image alt='CiniflexIcon' src={Ciniflex_icon} style={style.icon} />
            </Link>
            {location.pathname === NAVIGATION_CONSTANTS.LOGIN_PAGE ? '' :
                <>
                    <div>
                        <NavigationLink loginStatus={loginStatus} />
                    </div>
                    {loginStatus.isLoggedIn ? <Button name={`${loginStatus.name} | ${BUTTON_CONSTANTS.LOGOUT}`} style={style.login} onClick={logoutHandler} /> : <Button name={BUTTON_CONSTANTS.LOGIN} style={style.login} onClick={() => navigate(NAVIGATION_CONSTANTS.LOGIN_PAGE)} />}
                </>}
        </header>
    )
}

export default NavHeader;
