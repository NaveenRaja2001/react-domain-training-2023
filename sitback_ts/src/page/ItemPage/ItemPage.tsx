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

type Product = {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;
  };
  
  
  
  type ItemPageProps ={
  
  }
  
  const ItemPage: React.FC<ItemPageProps> = () => {
    const [wishlist, setWishlist] = useState<Array<Product>>([]);
    const [cart, setCart] = useState([]);
    const [wishlistActive, setWishlistActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const [totalAmount,setTotalAmount]=useState(0);
    const [totalPrice, setTotalPrice] = useState(() => JSON.parse(localStorage.getItem(localStorageVariable.totalprice)||'0'));
    const { categories } = useParams();
    const [items, setItems] = useState([]);
    const [isloading,setIsLoading]=useState(true);

    const cartTabToggle = (isWishlist:boolean, isCart:boolean) => {
        setWishlistActive(isWishlist);
        setCartActive(isCart);
    }

    const setStatus = () => {
        const cartData=localStorage.getItem(localStorageVariable.cart);
        const Cart = JSON.parse(cartData||'{}');
        cartData && Cart.length !== 0 ? setCartActive(true) : setWishlistActive(true)
    }

    const manageWishlist =(product:Product) => {
        let tempList=addWishList(product);
        setWishlist(tempList);
        cartTabToggle(true, false);
        return tempList;
    }

    const removeFromWishlist = (product:Product) => {
        let tempList=removeDataFromWishlist(product);
        setWishlist(tempList);
        addToCart(product, 1);
        return tempList;
    };
    const addToCart = (product:Product, quantity:number) => {
        const cartData=addDataToCart(product,quantity);
        setTotalPrice(cartData.currentTotalprice)
        setCart(cartData.cart)
        cartTabToggle(false, true);
        quantity<0? setTotalAmount((prv)=>prv-parseInt(product.price)):
        setTotalAmount((prv)=>prv+parseInt(product.price))
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
        const myCartData = JSON.parse(tempCartData||'[]');
        const tempWishLisData = localStorage.getItem(localStorageVariable.wishlist);
        const wishListData = JSON.parse(tempWishLisData||'[]');
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