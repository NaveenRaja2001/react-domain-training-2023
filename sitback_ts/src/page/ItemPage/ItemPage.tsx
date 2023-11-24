import ItemsCard from '../../component/ItemsCard/ItemsCard.tsx';
import { useParams,useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";
import style from './ItemPage.module.scss';
import Header from '../../component/Header/Header.tsx';
import CartContainer from '../../container/CartContainer/CartContainer.tsx';
import { fetchProduct } from '../../service/ApiService.jsx';
import { addWishList, removeDataFromWishlist, addDataToCart } from '../../utils/SitBackUtils.jsx';
import { convertIndianRupee } from '../../utils/SitBackUtils.jsx';
import { localStorageVariable } from '../../constant/pageConstants.jsx'
import Loader from '../../component/Loader/Loader.jsx';

type Product = {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;
};

type ItemPageProps = {

}

const ItemPage: React.FC<ItemPageProps> = () => {
    const navigate=useNavigate();
    const [wishlist, setWishlist] = useState<Array<Product>>([]);
    const [cart, setCart] = useState([]);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [sidebar, setSidebar] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(() => JSON.parse(localStorage.getItem(localStorageVariable.totalprice) || '0'));
    const { categories } = useParams();
    const [items, setItems] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const cartTabToggle = (sidebarActive: boolean, sidebar: string) => {
        setSidebarActive(sidebarActive);
        setSidebar(sidebar);
    }

    const manageWishlist = (product: Product, isRemove: boolean) => {
        let tempList
        if (isRemove) {
            tempList = removeDataFromWishlist(product);
            addToCart(product, 1);
        }
        else {
            tempList = addWishList(product);
            cartTabToggle(true, 'wishlist');
        }
        setWishlist(tempList);
        return tempList;
    }

    const addToCart = (product: Product, quantity: number) => {
        const cartData = addDataToCart(product, quantity);

        setTotalPrice(cartData.currentTotalprice)
        setCart((state) => {
            if (cartData.cart.length === 0) {
                if (wishlist.length === 0) { setSidebarActive(false) }
                else { setSidebar('wishlist'); }
            }
            return cartData.cart;

        })
        cartTabToggle(true, 'cart');
        quantity < 0 ? setTotalAmount((prv) => prv - parseInt(product.price)) :
            setTotalAmount((prv) => prv + parseInt(product.price))
        return cartData.cart;
    };

    useEffect(() => {

        fetchProduct(categories).then(data => {
            setItems(data)
            setIsLoading(false);
        }).catch(error => navigate('/'));

    }, [categories])

    useEffect(() => {
        const myCartData = JSON.parse(localStorage.getItem(localStorageVariable.cart) || '[]');
        const wishListData = JSON.parse(localStorage.getItem(localStorageVariable.wishlist) || '[]');
        setCart(myCartData)
        setWishlist(wishListData)
        const Cart = JSON.parse(localStorage.getItem(localStorageVariable.cart) || '[]');
        const WishList = JSON.parse(localStorage.getItem(localStorageVariable.wishlist) || '[]');
        if (Cart.length !== 0 || WishList.length !== 0) {
            setSidebarActive(true);
            (Cart.length !== 0)?setSidebar('cart'): setSidebar('wishlist')
            // }
        }
    }, [])
    const categoryItems = items?.map((ele, ind) => {
        return <ItemsCard key={ind} items={ele} manageWishlist={manageWishlist} manageCart={addToCart} />
    })
    return (
        <>
            <Header />
            {isloading ? <Loader /> :
                <div className={style.container}>
                    <div className={style.itemContainer}>
                        {categoryItems}
                    </div>
                    {sidebarActive ?
                        <div className={style.cartContainer}>
                            <CartContainer wishlist={wishlist} myCart={cart} addToCart={addToCart} manageWishlist={manageWishlist} cartTabToggle={cartTabToggle} sideBar={sidebar} totalPrice={convertIndianRupee(totalPrice)} />
                        </div> : ''
                    }
                </div>}
        </>
    )
}

export default ItemPage;