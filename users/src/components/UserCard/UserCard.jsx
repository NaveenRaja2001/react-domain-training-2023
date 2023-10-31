import UserIcon from '../UserIcon/UserIcon';
import Tag from '../Tag/Tag';
import style from './UserCard.module.css';

/**
 *@description Method to consrtuct Usercard
 * @returns UserCard
 * @author NaveenRaja
 */
const UserCard=({ data={} })=> {
    return (
        <div className={style.usercardContainer}>
            <div>
                <UserIcon alt={data?.name} src={data?.picture} />
            </div>
            <div className={style?.titleContainer}>
                <h2>{data?.name}</h2>
                <h3>{data?.place}</h3>
                <Tag tags={data?.tags} />
            </div>
        </div>
    );
}
export default UserCard;