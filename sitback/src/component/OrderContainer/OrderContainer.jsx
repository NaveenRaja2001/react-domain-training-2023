import React from 'react'
import style from './OrderContainer.module.scss'
import PropTypes from 'prop-types';
import OrderCard from '../OrderCard/OrderCard';
import{orderPageConstants} from '../../constant/pageConstants';

export const OrderContainer = ({myOrder}) => {
    const productCard=myOrder?.map((ele,ind)=><OrderCard key={ind} product={ele}/>)
  return (
    <div className={style.orderContainer}>
        <h2>
            {orderPageConstants.orderConformationTitle}
        </h2>
        <h3>
            {orderPageConstants.orderConformationSubTitle}
        </h3>
        <div className={style.cardWrapper}>
            {productCard}
        </div>
    </div>
  )
}
OrderContainer.propTypes = {
    myOrder: PropTypes.array.isRequired
}


export default OrderContainer;