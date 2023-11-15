import PropTypes from 'prop-types';
import React from 'react';
import style from './DetailPageHeader.module.css'
import { useState,useEffect } from 'react';

export const DetailPageHeader = ({place='',city='',temp='0'}) => {
  return (
    <div className={style.destinationHeader}>
      <h3>{city}</h3>
      <div>
      <h4>{place}</h4>
      </div>
      <p>{temp}<sup>&deg;</sup>C</p>
      </div>
  )
}
 export default DetailPageHeader

 DetailPageHeader.prototype={
  place:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
}