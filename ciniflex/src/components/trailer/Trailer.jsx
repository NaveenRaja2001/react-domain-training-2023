import React, { useContext } from 'react';
import Image from '../images/Image';
import Button from '../button/Button';
import style from './Trailer.module.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { TRAILERS } from '../../constants/pageConstant';
import TrailerImage from '../../assets/sindel-background.png';
import { loginContext } from '../../App';
import { trailerConstants, BUTTON_CONSTANTS, NAVIGATION_CONSTANTS } from '../../constants/pageConstant';


const Trailer = () => {
    const navigate = useNavigate();
    const { loginStatus, setLoginStatus } = useContext(loginContext);
    return (
        <div className={style.trailerContainer}>
            <h3>
                {trailerConstants.trailer_title}
            </h3>
            {loginStatus.isLoggedIn ? '' : <p className={style.signtext}>{trailerConstants.sign_in_decription}<span><NavLink to={NAVIGATION_CONSTANTS.LOGIN_PAGE}>{BUTTON_CONSTANTS.SIGN_IN_NOW}</NavLink></span></p>}
            <div className={style.trailerCard}>
                <Image alt={trailerConstants.trailer_img_alt} src={TrailerImage} style={style.trailerImage} />
                <div className={style.trailerContent}>
                    <h3>
                        {TRAILERS.MOVIE_TITLE}
                    </h3>
                    <p>
                        {TRAILERS.MOVIE_DESCRIPTION}
                    </p>
                    <Button style={style.trailerButton} name={BUTTON_CONSTANTS.WATCH_NOW} onClick={() => navigate(loginStatus.isLoggedIn ? NAVIGATION_CONSTANTS.NOW_SHOWING : NAVIGATION_CONSTANTS.LOGIN_PAGE)} />
                </div>
            </div>
        </div>
    )
}

export default Trailer;
