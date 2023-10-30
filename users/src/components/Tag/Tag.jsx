import style from './Tag.module.css';

/**
 *@description Method to Tags
 * @returns Tags
 * @author NaveenRaja
 */
export default function Tag({ tags }) {

  const listContent = tags.map((list) => <li>{list}</li>);
  const firstFiveListContent = listContent.slice(0, 5);
  return (
    <ul className={style.tagContainer}>
      {firstFiveListContent}
    </ul>
  );
}