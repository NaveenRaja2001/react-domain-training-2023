import React from 'react'
import Button from '../Button/Button';
import style from './ItemsCard.module.scss';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { convertIndianRupee, convertGuaranteeMessage } from '../../utils/SitBackUtils';
import { buttonNames } from '../../constant/pageConstants';
import {cartContainerConstant,errorImage} from '../../constant/pageConstants';

type ItemsCardProps = {
  items: {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;
    quantity?:number;
  };
  manageWishlist: (items:
    {
      name: string;
      price: string;
      photo: string;
      description: string;
      guarantee: number;
    }, isRemove:boolean) => void;

  manageCart: (items: {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;

  }, quantity: number) => void;
  isOrder?: boolean;
}


const ItemsCard: React.FC<ItemsCardProps> = ({ items,manageWishlist, manageCart,isOrder }) => {
  const addToWishList = () => {
    manageWishlist(items,false);
  };
  const addToCart = () => {
    manageCart(items, 1)
  };

  const addDefaultSrc = (ev:React.SyntheticEvent<HTMLImageElement>) => {
    const target = ev.target as HTMLImageElement;
    target.src = errorImage.URL
  }
  return (


    <div className={style.itemsCard}>
      <img src={items?.photo} alt={items?.name} onError={addDefaultSrc} />
      <div className={style.namePriceContainer}>
        <h3>{items?.name}</h3>
        <h3>
        {cartContainerConstant.RUPEES_SYMBOL+' '+convertIndianRupee(items.price)}
        </h3>
      </div>
      {isOrder? <h3 className={style.quantity}>{cartContainerConstant.QUANTITY+items?.quantity}</h3>:""}
      <p>
        {items?.description}
      </p>
      {isOrder?'':<>
      <div className={style.guaranteeContainer}>
        <IoShieldCheckmarkSharp />
        <h4> { convertGuaranteeMessage(items.guarantee)}</h4>
      </div>
      <div className={style.buttonContainer}>
        <Button name={buttonNames.ADD_TO_WISHLIST} style={style.wishListButton} onClick={addToWishList}></Button>
        <Button name={buttonNames.ADD_TO_CART} style={style.cartButton} onClick={addToCart}></Button>
      </div>
      </>
}
    </div>
  )
}
ItemsCard.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guarantee: PropTypes.number.isRequired,

  }).isRequired,
};

export default ItemsCard;
