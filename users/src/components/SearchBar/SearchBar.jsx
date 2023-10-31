import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import style from "./SearchBar.module.css";
import {pageConstants} from '../../constants/pageConstants';

/**
 *@description Method to SearchBar
 * @returns SearchBar
 * @author NaveenRaja
 */
 const SearchBar=() =>{
  return (
    <div className={style.searchBarGroup}>
      <FontAwesomeIcon icon={faSearch} className={style.icon} />
      <div>
        <Input style={style.searchBar} type={pageConstants.searchBarInputType} placeholder={pageConstants.searchBarPlaceHolder}/>
      </div>
    </div>
  );
}

export default SearchBar;