// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './TabButton.module.css';

export default function TabButton({onSelect,tabNames}){
    const linkButton={tabNames} && tabNames.map((tabName)=> <li className={style.list}>{tabName}</li>);
    return(
        <ul className={style.listcontainer}>
            {linkButton}
        </ul>
    );
}