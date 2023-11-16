import React from 'react'
import style from './OrderCard.module.scss'
import PropTypes from 'prop-types';
import {convertIndianRupee} from '../../utils/SitBackUtils'

export const OrderCard = ({product}) => {
    const price=convertIndianRupee(product.price);
  return (
    <div className={style.orderCard}>
        <img src={product.photo} alt={product.name} />
        <div className={style.nameAndPrice}>
            <p>
            {product.name}
            </p>
            <p>
            {`₹ ${price}`}
            </p>
            
        </div>
        <h3>
        Quantity : {product.quantity}
        </h3>
        <p className={style.cardDescription}>  {product.description}</p>
    </div>
  )
}
OrderCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

 export default OrderCard;