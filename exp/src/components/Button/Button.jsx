import PropTypes from 'prop-types';

import style from './button.module.css';


function Button({name='',onClick}) {
  return (
    <div>
     <button className={style.discriptionButton} onClick={onClick}>{name}</button>
    </div>
  );
}
export default Button;

Button.prototype={
  name:PropTypes.string.isRequired,
  path:PropTypes.string.isRequired
}