import style from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function SearchBar(){
    return(
        <div className={style.searchBarGroup}>
        <FontAwesomeIcon icon={faSearch} className={style.icon}/>
        <div>
        <input type="search" placeholder="Search users" className={style.searchBar}></input>

        </div>
        </div>
    );
}