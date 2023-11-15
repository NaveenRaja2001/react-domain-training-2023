import React from 'react'
import Button from '../Button/Button';
import style from './ItemsCard.module.scss';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { convertIndianRupee, convertGuaranteeMessage } from '../../utils/SitBackUtils';
import { buttonNames } from '../../constant/pageConstants';

type ItemsCardProps = {
  items: {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;
  };
  manageWishlist: (items:
    {
      name: string;
      price: string;
      photo: string;
      description: string;
      guarantee: number;
    }) => void;
  manageCart: (items: {
    name: string;
    price: string;
    photo: string;
    description: string;
    guarantee: number;
  }, quantity: number) => void;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ items, manageWishlist, manageCart }) => {
  const addToWishList = () => {
    manageWishlist(items);
  };
  const addToCart = () => {
    manageCart(items, 1)
  };

  const guarantee = convertGuaranteeMessage(items.guarantee);
  const price = convertIndianRupee(items.price);
  const addDefaultSrc = (ev:React.SyntheticEvent<HTMLImageElement>) => {
    const target = ev.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80'
  }
  return (


    <div className={style.itemsCard}>
      <img src={items?.photo} alt={items?.name} onError={addDefaultSrc} />
      <div className={style.namePriceContainer}>
        <h3>{items?.name}</h3>
        <h3>
          {`₹ ${price}`}
        </h3>
      </div>
      <p>
        {items?.description}
      </p>
      <div className={style.guaranteeContainer}>
        <IoShieldCheckmarkSharp />
        <h4> {guarantee}</h4>
      </div>
      <div className={style.buttonContainer}>
        <Button name={buttonNames.ADD_TO_WISHLIST} style={style.wishListButton} onClick={addToWishList}></Button>
        <Button name={buttonNames.ADD_TO_CART} style={style.cartButton} onClick={addToCart}></Button>
      </div>
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
  manageWishlist: PropTypes.func.isRequired,
  manageCart: PropTypes.func.isRequired,
};

export default ItemsCard;
