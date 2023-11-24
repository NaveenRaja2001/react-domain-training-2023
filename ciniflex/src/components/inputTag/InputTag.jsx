import React from 'react';
import PropTypes from 'prop-types';

const InputTag = ({ type, style, onChange }) => {
    return (
        <input type={type} className={style} onChange={onChange} />
    )
}

InputTag.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.string,
    onChange: PropTypes.func,
  };


export default InputTag;