import React from 'react'
import Button from '../../component/Button/Button';
import { useNavigate } from "react-router-dom";
import style from './CartContainer.module.scss';
import CartCard from '../../component/CartCard/CartCard';
import CartEmpty from '../../component/CartEmpty/CartEmpty';
import{buttonNames} from '../../constant/pageConstants';
import PropTypes from 'prop-types';
import {cartContainerConstant} from '../../constant/pageConstants'

type CartContainerProps={
    wishlist: any[];
    myCart: any[];
    sideBar:String;
    manageWishlist:(item: Product,isRemove:boolean) => void;
    cartTabToggle: (isWishlist: boolean, isCart: string) => void;
    addToCart: (item: Product, quantity: number) => void;
    totalPrice: string;
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
  
  const CartContainer: React.FC<CartContainerProps> = ({ wishlist, myCart, manageWishlist, cartTabToggle,sideBar, addToCart,totalPrice}) => {
    const navigate=useNavigate();
    const wishlistCard = wishlist?.map((wishlistData, ind) => <CartCard wishlist={wishlistData} key={ind} manageWishlist={manageWishlist} />);
    const myCartCard = myCart?.map((cartData, ind) => <CartCard wishlist={cartData} key={ind} manageWishlist={manageWishlist} isMyCart={true} addToCart={addToCart}/>);
    return (
        <div className={style.cartContainer}>
            <div className={style.cartWrapper}>
                <header className={style.cartHeader}>
                    <p onClick={() => cartTabToggle(true, 'cart')} className={sideBar=='cart' ? style.selectedTab : ''}>MY CART</p>
                    <p onClick={() => cartTabToggle(true, 'wishlist')} className={sideBar=='wishlist' ? style.selectedTab : ''}>MY WISHLIST</p>
                </header>
                <main className={style.cartContentWrapper}>
                    {
                        sideBar=='wishlist' ?
                            wishlist.length !== 0 ? <>{wishlistCard}</> : <><CartEmpty /></> :
                            myCart.length !== 0 ? <>{myCartCard}</> : <><CartEmpty /></>
                    }

                </main>
                {myCart.length?
                    <footer className={style.cartFooter}>
                        <div className={style.amountContainer}>
                            <p className={style.title}>{cartContainerConstant.TOTAL_AMOUNT}</p>
                            <p>{cartContainerConstant.RUPEES_SYMBOL+' '+totalPrice}</p>
                        </div>
                        <Button name={buttonNames.PLACE_ORDER} style={style.placeOrderButton} onClick={()=>navigate('/confirmOrder')}></Button>
                    </footer>:''

                }
            </div>
        </div>
    )
}

CartContainer.propTypes = {
    wishlist: PropTypes.array.isRequired,
    myCart: PropTypes.array.isRequired,
    cartTabToggle: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    totalPrice: PropTypes.string.isRequired,
  };

export default CartContainer;
