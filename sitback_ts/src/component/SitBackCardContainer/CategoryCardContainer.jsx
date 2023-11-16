import React, { useEffect, useState } from "react";
import style from './CategoryCardContainer.module.scss'
import SitBackCard from '../CategoryCardContainer/CategoryCard';
import {fetchCategory} from '../../service/ApiService';
import{catogoriesPageConstants} from '../../constant/pageConstants';
import Loader from "../Loader/Loader";

export const CategoryCardContainer = () => {
    const [catogories, setCatogories] = useState([]);
    const [isloading,setIsLoading]=useState(true);

    useEffect(() => {
        fetchCategory().then(data=>{
            setCatogories(data);
            setIsLoading(false);
        })
       
    }, [])

  const sitBackCard=catogories?.map((ele,ind)=><SitBackCard key={ind} category={ele}/>);
  return (
    <>
    <div className={style.sitbackCardContainer}>
        <h2>
            {catogoriesPageConstants.CatogoriesHeading}
        </h2>
        <h3>
            {catogoriesPageConstants.CatogoriesSubHeading}
        </h3>
       {isloading?<Loader/>:
       <div className={style.categoryCardContainer}>
            {sitBackCard}
        </div>}
       
    </div>
     <div className={style.copyRightContainer}>
     <h2>{catogoriesPageConstants.copyrights}</h2>
</div>
</>
  )
}

export default CategoryCardContainer;