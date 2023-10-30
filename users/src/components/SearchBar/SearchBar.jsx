import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./SearchBar.module.css";

/**
 *@description Method to SearchBar
 * @returns SearchBar
 * @author NaveenRaja
 */
export default function SearchBar() {
  return (
    <div className={style.searchBarGroup}>
      <FontAwesomeIcon icon={faSearch} className={style.icon} />
      <div>
        <input
          type="search"
          placeholder="Search users"
          className={style.searchBar}
        ></input>
      </div>
    </div>
  );
}
