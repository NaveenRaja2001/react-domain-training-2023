import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import style from './button.module.css';


function Button({name='',path='/'}) {
  const navigate=useNavigate();
  return (
    <div>
      {/* <Link to={path}><button className={style.discriptionButton}>{name}</button></Link> */}
     <button className={style.discriptionButton} onClick={()=> navigate(path)}>{name}</button>
    </div>
  );
}
export default Button;

Button.prototype={
  name:PropTypes.string.isRequired,
  path:PropTypes.string.isRequired
}