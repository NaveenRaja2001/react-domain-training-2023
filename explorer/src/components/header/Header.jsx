import explorerIcon from '../../assets/explorerIcon.jpg';
import HeaderTag from '../HeaderTag/HeaderTag';
import style from './Header.module.css';


const Header=()=>{
   return(
    <header>
        <div className={style.iconHeader}>
         <img src={explorerIcon} alt="explorerIcon" />
           <HeaderTag/>
        </div>
    </header>
   );
}
export default Header;