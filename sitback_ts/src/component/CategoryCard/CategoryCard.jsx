import React from 'react'
import style from './CategoryCard.module.scss'
import Button from '../Button/Button.jsx'
import {useNavigate} from 'react-router-dom';
import  CartContainer  from '../../container/CartContainer/CartContainer.tsx';
import{buttonNames} from '../../constant/pageConstants.jsx';
import { addDefaultSrc } from '../../service/ApiService.jsx';
export const CategoryCard = ({category}) => {
  const navigate = useNavigate();


  const navigateToCategory = () => {
    navigate(`/details/${category.id}`);
}

  
  return (
    <>
    <div className={style.categoryCard}>
        <img src={category?.photo} alt={category?.name} onError={addDefaultSrc}/>
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
