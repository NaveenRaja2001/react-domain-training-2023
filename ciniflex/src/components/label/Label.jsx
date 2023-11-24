import React from 'react';
import PropTypes from 'prop-types';


const Label = ({ style, name }) => {
    return (
        <label className={style}>{name}</label>
    )
}

Label.propTypes = {
    style: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

export default Label;