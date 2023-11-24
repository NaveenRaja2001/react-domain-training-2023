import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import style from './CartEmpty.module.scss';
import{emptyCartConstants} from '../../constant/pageConstants';

export const CartEmpty = () => {

  return (<div className={style.emptyCartcontainer}>
   <div >{emptyCartConstants.EMPTY}</div>
   <IoCartOutline className={style.icon}/>
  </div>

   

  )
}

export default CartEmpty;