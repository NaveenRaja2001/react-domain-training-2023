import React from 'react'
import style from '../CartCard/CartCard.module.scss'
import Button from '../Button/Button';
import {convertIndianRupee} from '../../utils/SitBackUtils'
import{buttonNames} from '../../constant/pageConstants'
import PropTypes from 'prop-types';
import { addDefaultSrc } from '../../service/ApiService.jsx';
import{cartContainerConstant} from '../../constant/pageConstants.jsx'



export const CartCard = ({ wishlist,manageWishlist,isMyCart,addToCart}) => {
    const removeWishlist=()=>{
        manageWishlist(wishlist,true);
    }
    const price=convertIndianRupee(wishlist?.price);
    return (
        <div className={style.cartCardContainer}>
            <div className={style.cartCardWrapper}>
            <div className={style.imgContainer}>
                <img src={wishlist?.photo} alt={wishlist?.name} onError={addDefaultSrc}/>
                </div>
                <div className={style.cartdetailsContainer}>
                    <h3>
                        {wishlist?.name}
                    </h3>
                    <h4>
                     {cartContainerConstant.RUPEES_SYMBOL+' '+price}
                    </h4>
                </div>
                {isMyCart ? 
                    <div className={style.buttonContainer}>
                        <Button name={buttonNames.decrementButton} style={style.aggregateButton} onClick={()=>addToCart(wishlist,-1)}></Button>
                            <p>{wishlist?.quantity}</p>
                        <Button name={buttonNames.incrementButton} style={style.aggregateButton} onClick={()=>addToCart(wishlist,1)}></Button>
                    </div>
                    :
                    <Button name={buttonNames.ADD_TO_CART} onClick={removeWishlist} style={style.cartButton}></Button> 
}
           
        </div></div>
    )
}

CartCard.propTypes = {
    wishlist: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      quantity: PropTypes.number,
    }),
    manageWishlis: PropTypes.func,
    isMyCart: PropTypes.bool,
    addToCart: PropTypes.func,
  };

export default CartCard;