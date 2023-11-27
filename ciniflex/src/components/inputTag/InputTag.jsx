import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const InputTag = forwardRef(({ type, style='', onChange = () => {} },ref) => {
    return (
        <input type={type} className={style} onChange={onChange} ref={ref}/>
    )
}
)
InputTag.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.string,
    onChange: PropTypes.func,
  };


export default InputTag;