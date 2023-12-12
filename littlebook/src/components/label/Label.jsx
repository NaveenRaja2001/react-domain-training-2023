import React from 'react';
import PropTypes from 'prop-types';

export const Label = (prop = '') => {
  return (
    <label {...prop}> {prop.htmlFor}</label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
}

export default Label;