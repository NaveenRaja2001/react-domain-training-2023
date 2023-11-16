import React, { useEffect } from 'react'
import Header from '../../component/Header/Header.tsx';
import { useState } from "react";
import CategoryCardContainer from '../../component/SitBackCardContainer/CategoryCardContainer';
import OrderContainer from '../../component/OrderContainer/OrderContainer';
import {localStorageVariable} from '../../constant/pageConstants'

const getOrder=()=>{
    const myCartData= JSON.parse(localStorage.getItem(localStorageVariable.cart));
    return myCartData || [];
}
export const OrderPage = () => {
    const [myOrder,setMyOrder]=useState(()=> getOrder());
    const removeProductFromCart=()=>{
        localStorage.removeItem(localStorageVariable.cart);
        localStorage.removeItem(localStorageVariable.totalprice);
    }
    
    useEffect(() => {
        removeProductFromCart()
    }, [])
    
  return (
   <>
    
   <Header/>
   <OrderContainer myOrder={myOrder}/>
   <CategoryCardContainer/>
    </>

  )
}
export default OrderPage;