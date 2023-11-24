import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import style from './NavigationLink.module.scss';
import { navigationConstants } from '../../constants/pageConstant';
import PropTypes from 'prop-types'; 


const NavigationLink = ({ loginStatus }) => {

    const navLinks = navigationConstants?.filter((ele, ind) => ind === 2 ? loginStatus.isLoggedIn : true)?.map((ele, ind) => <NavLink to={ele.url} key={ind}><li>{ele.nav}</li></NavLink>);
    return (
        <ul className={style.navContainer}>
            {navLinks}
        </ul>
    )
}
NavigationLink.propTypes = {
    loginStatus: PropTypes.shape({
        isLoggedIn: PropTypes.bool,
        name: PropTypes.string,
    })
};


export default NavigationLink;