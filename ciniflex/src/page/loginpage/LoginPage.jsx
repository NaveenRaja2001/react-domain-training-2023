import React from 'react';
import { useState, createContext } from 'react';
import NavHeader from '../../components/navHeader/NavHeader';
import LoginCard from '../../components/loginCard/LoginCard';
import Image from '../../components/images/Image';
import CoverImage from '../../assets/sindel-background.png';
import style from './LoginPage.module.scss';



export const LoginPage = ({ setLoginStatus,loginStatus }) => {
    return (
        <>
            <NavHeader />
            <Image alt='coverImage' src={CoverImage} style={style.coverImage} />
            <LoginCard setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>
        </>

    )
}

export default LoginPage;