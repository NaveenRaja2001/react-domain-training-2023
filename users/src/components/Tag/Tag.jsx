import style from './Tag.module.css';


export default function Tag({tags}){
    // const listContent=['mountain','rain','fancy','cool','fdf'];
    const listContent=tags.map((list)=> <li>{list}</li>);
  return (

    <ul className={style.tagContainer}>
        {listContent}
    </ul>
    

  );
}