import React from 'react'
import PropTypes from 'prop-types';


const Button = ({ name, style, onClick }) => {
    return (
        <button className={style} onClick={onClick}>{name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string,
    onClick: PropTypes.func,
  };
  
export default Button;
