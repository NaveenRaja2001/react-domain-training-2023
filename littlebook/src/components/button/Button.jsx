import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({name='',onClick=()=>{},style=''}) => {
  return (
    <button id={name} onClick={onClick} className={style}>{name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

export default Button;

