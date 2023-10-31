import style from './UserIcon.module.css';

/**
 *@description Method to consrtuct card
 * @returns ImageCard
 * @author NaveenRaja
 */
const UserIcon=({ src='', alt=''})=> {
    return (
        <div className={style.imageContainer}>
            <img alt={alt} src={src} />
        </div>
    );
};
export default UserIcon;

