import PropTypes from 'prop-types';
import React from "react";
// import places from "../../assets/json/places.json";

function Select({onChange,user=[]}) {
  const options=user?.map((ele,ind) =>  <option key={ind} value={ele.city}> {ele.city}</option>);
  return (
    <>
      <select onChange={onChange} defaultValue={'DEFAULT'}>
        <option disabled value='DEFAULT'> Choose </option>
        {options}
      </select>
    </>
  );
}

export default Select;

Select.prototype={
  user:PropTypes.array.isRequired,
  onChange:PropTypes.func.isRequired
}