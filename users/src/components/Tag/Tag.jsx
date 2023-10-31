import style from './Tag.module.css';

/**
 *@description Method to Tags
 * @returns Tags
 * @author NaveenRaja
 */
const Tag=({ tags=[] })=> {

  const listContent = tags?.map((list,index) => <li key={index}>{list}</li>);
  const firstFiveListContent = listContent.slice(0, 5);
  return (
    <ul className={style.tagContainer}>
      {firstFiveListContent}
    </ul>
  );
}
export default Tag;