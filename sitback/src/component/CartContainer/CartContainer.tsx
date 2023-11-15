import React from 'react'
import { useState } from "react";
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import style from '../CartContainer/CartContainer.module.scss';
import CartCard from '../CartCard/CartCard';
import CartEmpty from '../CartEmpty/CartEmpty';
import{buttonNames} from '../../constant/pageConstants';
import PropTypes from 'prop-types';

type CartContainerProps={
    wishlist?: any[];
    myCart?: any[];
    removeFromWishlist: (item: CartItem) => void;
    cartTabToggle: (isWishlist: boolean, isCart: boolean) => void;
    isWishlistactive: boolean;
    isCartActive: boolean;
    addToCart: (item: CartItem, quantity: number) => void;
    totalPrice: number;
}

type CartItem ={
  product: Product;
  quantity: number;
}

type Product= {
  name: string;
  price: string;
  photo: string;
  description: string;
  guarantee: number;
}
  
  const CartContainer: React.FC<CartContainerProps> = ({ wishlist, myCart, removeFromWishlist, cartTabToggle, isWishlistactive, isCartActive, addToCart,totalPrice}) => {
    const navigate=useNavigate();
    const wishlistCard = wishlist?.map((ele, ind) => <CartCard wishlist={ele} key={ind} removeFromWishlist={removeFromWishlist} />);
    const myCartCard = myCart?.map((ele, ind) => <CartCard wishlist={ele} key={ind} removeFromWishlist={removeFromWishlist} isMyCart={true} addToCart={addToCart}/>);
    return (
        <div className={style.cartContainer}>
            <div className={style.cartWrapper}>
                <header className={style.cartHeader}>
                    <p onClick={() => cartTabToggle(false, true)} className={isCartActive ? style.selectedTab : ''}>MY CART</p>
                    <p onClick={() => cartTabToggle(true, false)} className={isWishlistactive ? style.selectedTab : ''}>MY WISHLIST</p>
                </header>
                <main className={style.cartContentWrapper}>
                    {
                        isWishlistactive ?
                            wishlist?.length !== 0 ? <>{wishlistCard}</> : <><CartEmpty /></> :
                            myCart?.length !== 0 ? <>{myCartCard}</> : <><CartEmpty /></>
                    }

                </main>
                {isCartActive&& myCart?.length?
                    <footer className={style.cartFooter}>
                        <div className={style.amountContainer}>
                            <p className={style.title}>TOTAL AMOUNT</p>
                            <p>{totalPrice}</p>
                        </div>
                        <Button name={buttonNames.PLACE_ORDER} style={style.placeOrderButton} onClick={()=>navigate('/confirmOrder')}></Button>
                    </footer>:''

                }
            </div>
        </div>
    )
}

CartContainer.propTypes = {
    wishlist: PropTypes.array,
    myCart: PropTypes.array,
    removeFromWishlist: PropTypes.func.isRequired,
    cartTabToggle: PropTypes.func.isRequired,
    isWishlistactive: PropTypes.bool.isRequired,
    isCartActive: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
  };

export default CartContainer;
