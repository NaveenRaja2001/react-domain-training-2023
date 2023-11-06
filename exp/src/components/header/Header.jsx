import PropTypes from 'prop-types';
import explorerIcon from '../../assets/images/logo.png';
import HeaderTag from '../HeaderTag/HeaderTag';
import style from './Header.module.css';
import { ExplorePageHeader } from '../ExplorePageHeader/ExplorePageHeader';
import { DetailPageHeader} from '../DetailPageHeader/DetailPageHeader';
import { NavLink } from 'react-router-dom';


const Header=({user=[],place='',city='',page=false,img='',temp='0'})=>{
//   const [selected,setSelected] = useState(false);
   return(
    <header>
        <div className={style.iconHeader}>
         <NavLink to={'/home'}>  <img className={style.iconHeaderImg} src={explorerIcon} alt="explorerIcon" /></NavLink>
       
           <HeaderTag/>
        </div>
        <div className={style.headerImgContainer}>
        <div className={style.headerTitle}>
         {page?<DetailPageHeader city={city} place={place} temp={temp}/>:<ExplorePageHeader user={user}/>}
        </div>

        <div className={style.headerCoverImg}>
          <img src={img} alt="header cover " />
        </div>
      </div>
    </header>

   );
}
export default Header;

ExplorePageHeader.prototype={
   user:PropTypes.array.isRequired,
   place:PropTypes.string.isRequired,
   city:PropTypes.string.isRequired,
   img:PropTypes.string.isRequired,
   page:PropTypes.bool.isRequired
 }

