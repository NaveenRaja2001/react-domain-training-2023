import React from 'react';
import PropTypes from 'prop-types';

export const Label = (prop = '') => {
  return (
    <label className={prop.styles} htmlFor={prop.htmlFor}> {prop.htmlFor}</label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
}

export default Label;