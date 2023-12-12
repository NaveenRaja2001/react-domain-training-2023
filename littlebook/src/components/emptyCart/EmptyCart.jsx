import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import style from './EmptyCart.module.scss';
import { EMPTYCART } from '../../constants/littleBookConstants';

export const EmptyCart = () => {

  return (<div className={style.emptyCartcontainer}>
   <div >{EMPTYCART}</div>
   <IoCartOutline className={style.icon}/>
  </div>

   

  )
}

export default EmptyCart;