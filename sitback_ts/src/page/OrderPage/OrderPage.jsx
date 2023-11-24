import React, { useEffect } from 'react'
import Header from '../../component/Header/Header.tsx';
import { useState } from "react";
import CategoryCardContainer from '../../container/CategoryCardContainer/CategoryCardContainer.jsx';
import OrderContainer from '../../container/OrderContainer/OrderContainer.jsx';
import {localStorageVariable} from '../../constant/pageConstants'
import { useNavigate } from 'react-router-dom';

const getOrder=()=>{
    const myCartData= JSON.parse(localStorage.getItem('order') || '[]');
    return myCartData || [];
}
export const OrderPage = () => {
    const navigate=useNavigate();
    const [myOrder,setMyOrder]=useState(()=> getOrder());
    
    const removeProductFromCart=()=>{
        localStorage.removeItem('order');
        localStorage.removeItem(localStorageVariable.totalprice);
    }
    
    useEffect(() => {
        if(myOrder.length === 0)
        navigate('/')
        removeProductFromCart()
        
    console.log(myOrder.length);
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