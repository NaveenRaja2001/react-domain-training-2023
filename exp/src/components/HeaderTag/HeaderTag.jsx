
import style from './HeadTag.module.css';
import {FormConstants} from '../../constants/pageConstants'
import { Link } from 'react-router-dom';


const HeaderTag=()=>{
    const headerTagName=FormConstants.HEADER_TAG_NAMES;
    const headerTags=headerTagName.map((name,index)=>(
       
        <Link><button key={index} >{name}</button></Link>
    ));
    return(
        <div className={style.linkContainer}>
       {headerTags}
    </div>
    );
}
export default HeaderTag;
