import React from 'react';
import style from './Header.module.scss';
import {Link, NavLink} from 'react-router-dom';
import {FaCaretDown} from 'react-icons/fa';
import{navLinks,headerConstants} from '../../constant/pageConstants';

export const Header = () => {
    const navButton=navLinks?.map((ele,ind)=>{
      return <button key={ind}><NavLink to={ele.URL} className={({isActive})=>isActive ?style.active : ''}>{ele.NAME}</NavLink></button>
    })
  return (
   <header>
     <Link to={'/'}><h2 className={style.logo}>{headerConstants.headerName}</h2></Link>
    <div className={style.buttonContainer}>
    {navButton}
    </div>
    <div className={style.headerName}>
        <h3>
            {headerConstants.userName}
        </h3>
        <span><FaCaretDown /></span>
    </div>
   </header>
  )
}


export default Header;