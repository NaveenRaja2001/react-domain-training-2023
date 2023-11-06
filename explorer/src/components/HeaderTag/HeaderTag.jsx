
import style from './HeadTag.module.css';


const HeaderTag=()=>{
    const headerTagName=['Hotels','Bike Rentals','Restaurants'];
    const headerTags=headerTagName.map((name,index)=>(
        <button key={index} >{name}</button>
    ));
    return(
        <div className={style.linkContainer}>
       {headerTags}
    </div>
    );
}
export default HeaderTag;
