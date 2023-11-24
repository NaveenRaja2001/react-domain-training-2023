import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({name,style,onClick}) => {
  return (
    <div>
        <button className={style} onClick={onClick}>{name}</button>
    </div>
  )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Button;