import SearchBar from "../../components/SearchBar/SearchBar";
import TabButton from "../../components/TabButton/TabButton";
import UserCard from "../../components/UserCard/UserCard";
import style from './UserPage.module.css';
import userDate from '../../data/data.json';
import {pageConstants} from '../../constants/pageConstants';

const User=()=> { 
    const tabNames = pageConstants.navigationLinks;
    const userList=userDate && userDate.map((data,index) => <UserCard data={data} key={index} />);
    return (
        <div className={style.user}>
            <header>
                <h1 className={style.title}>{pageConstants.pageTitle}</h1>
                <div className={style.nav}>
                    <SearchBar></SearchBar>
                    <TabButton tabNames={tabNames}></TabButton>
                </div>
            </header>
            <main>
                {userList}
            </main>
        </div>
    );
}
export default User;