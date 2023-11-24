import React from 'react'
import style from './CategoryCard.module.scss'
import Button from '../Button/Button'
import {useNavigate} from 'react-router-dom';
import  CartContainer  from '../CartContainer/CartContainer.tsx';
import{buttonNames} from '../../constant/pageConstants';
export const CategoryCard = ({category}) => {
  const navigate = useNavigate();


  const navigateToCategory = () => {
    navigate(`/details/${category.id}`);
}
  
  return (
    <>
    <div className={style.categoryCard}>
        <img src={category?.photo}/>
        <h2>{category?.category}</h2>
        <p>
        {category?.description}
        </p>
        <Button style={style.shopNowButton} onClick={navigateToCategory} name={buttonNames.SHOP_NOW}></Button>
       
    </div>
  
    </>
  )
}


export default CategoryCard
