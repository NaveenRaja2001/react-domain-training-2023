

import style from './button.module.css';


function Button({name}) {

  return (
    <div>
     <button className={style.discriptionButton}>{name}</button>
    </div>
  );
}

export default Button;

