import style from './Card.module.css'; 
import Button from "../Button/Button";
import img from '../../assets/images/chidambaram.png'
const Card=(props)=> {
  const ele=props.data;
  return (
    
    <div className={style.container}>
      <img
      src={img}
        alt="enchanting tamilnadu"
      ></img>
      <h3>{ele.place}</h3>
      <h4>{ele.city}</h4>
      <p>{ele.shortDescription}</p>
      <Button name="READ MORE"></Button>
    </div>
    
  );
}

export default Card;