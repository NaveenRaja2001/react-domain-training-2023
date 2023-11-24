import ItemsCard from '../../component/ItemsCard/ItemsCard.tsx';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from './ItemPage.module.scss';
import Header from '../../component/Header/Header.tsx';
import CartContainer from '../../component/CartContainer/CartContainer.tsx';
import { fetchProduct } from '../../service/ApiService.jsx';
import {addWishList,removeDataFromWishlist,addDataToCart} from '../../utils/SitBackUtils.jsx';
import {convertIndianRupee} from '../../utils/SitBackUtils.jsx';
import {localStorageVariable} from '../../constant/pageConstants.jsx'
import Loader from '../../component/Loader/Loader.jsx';


  
  const ItemPage = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlistActive, setWishlistActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(() => JSON.parse(localStorage.getItem(localStorageVariable.totalprice)));
    const { categories } = useParams();
    const [items, setItems] = useState([]);
    const [isloading,setIsLoading]=useState(true);

    const cartTabToggle = (isWishlist, isCart) => {
        setWishlistActive(isWishlist);
        setCartActive(isCart);
    }

    const setStatus = () => {
        const Cart = JSON.parse(localStorage.getItem(localStorageVariable.cart));
        Cart && Cart.length !== 0 ? setCartActive(true) : setWishlistActive(true)
    }

    const manageWishlist =(product) => {
        let tempList=addWishList(product);
        setWishlist(tempList);
        cartTabToggle(true, false);
        return tempList;
    }

    const removeFromWishlist = (product) => {
        let tempList=removeDataFromWishlist(product);
        setWishlist(tempList);
        addToCart(product, 1);
        return tempList;
    };
    const addToCart = (product, quantity) => {
        const cartData=addDataToCart(product,quantity);
        setTotalPrice(cartData.currentTotalprice)
        setCart(cartData.cart)
        cartTabToggle(false, true);
        return cartData.cart;
    };

    useEffect(() => {
        fetchProduct(categories).then(data => {
            setItems(data)
            setIsLoading(false);
        })
      
    }, [categories])

    useEffect(() => {
        const tempCartData = localStorage.getItem(localStorageVariable.cart);
        const myCartData = JSON.parse(tempCartData);
        const tempWishLisData = localStorage.getItem(localStorageVariable.wishlist);
        const wishListData = JSON.parse(tempWishLisData);
        setCart(myCartData)
        setWishlist(wishListData)
        setStatus();
         
    }, [])
    const categoryItems = items?.map((ele, ind) => {
        return <ItemsCard key={ind} items={ele} manageWishlist={manageWishlist} manageCart={addToCart} />
    })
    return (
        <>
            <Header />
            {isloading?<Loader/>:
            <div className={style.container}>
                <div className={style.itemContainer}>
                    {categoryItems}
                </div>

                {(wishlist && wishlist?.length !== 0) || (cart && cart?.length !== 0) ?
                    <div className={style.cartContainer}>
                        <CartContainer wishlist={wishlist} myCart={cart} addToCart={addToCart} removeFromWishlist={removeFromWishlist} cartTabToggle={cartTabToggle} isWishlistactive={wishlistActive} isCartActive={cartActive} totalPrice={convertIndianRupee(totalPrice)} />
                    </div> : ''
                }
                
            </div>}
        </>
    )
}

export default ItemPage;