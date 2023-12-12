import React from 'react'
import Label from '../label/Label';
import InputTag from '../inputTag/InputTag';
import PropTypes from 'prop-types';

export const FilterButton = ({ name = '', onChange = () => { } }) => {

  return (
    <div>
      <InputTag name={name} value={name} onChange={onChange} />
      <Label htmlFor={name} />
    </div>
  )
}


FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterButton;


