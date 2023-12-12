import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import style from './EmptyCart.module.scss';


export const EmptyCart = ({text=''}) => {

  return (<div className={style.emptyCartcontainer}>
   <div >{text}</div>
   <IoCartOutline className={style.icon}/>
  </div>
  )
}

export default EmptyCart;