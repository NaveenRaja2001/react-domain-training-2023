import React from 'react'
import style from './OrderContainer.module.scss'
import PropTypes from 'prop-types';
import OrderCard from '../../component/OrderCard/OrderCard';
import{orderPageConstants} from '../../constant/pageConstants';
import ItemsCard from '../../component/ItemsCard/ItemsCard';

export const OrderContainer = ({myOrder}) => {
    const productCard=myOrder?.map((ele,ind)=><ItemsCard key={ind} items={ele} isOrder={true}/>)
  return (
    <div className={style.orderContainer}>
        <h2 className={style.title}>
            {orderPageConstants.orderConformationTitle}
        </h2>
        <h3 className={style.subtitle} >
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