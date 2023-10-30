import SearchBar from "../SearchBar/SearchBar";
import TabButton from "../TabButton/TabButton";
import UserCard from "../UserCard/UserCard";
import style from './User.module.css';
import userDate from '../../data/data.json';

export default function User(){
    const tabNames=['Reputation','New Users','Voters','Editors','Moderators'];
    return(
        <div className={style.user}>
        <header>
            <h1 className={style.title}>Users</h1>
            <div className={style.nav}>
                   <SearchBar></SearchBar>
                  <TabButton tabNames={tabNames}></TabButton>
            </div>
        </header>
        <main>
            {userDate && userDate.map((data)=> <UserCard data={data}/>)}
        </main>
       </div>
    );
}