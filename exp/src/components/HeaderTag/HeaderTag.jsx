
import style from './HeadTag.module.css';
import {FormConstants} from '../../constants/pageConstants'

const HeaderTag=()=>{
    const headerTagName=FormConstants.HEADER_TAG_NAMES;
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
