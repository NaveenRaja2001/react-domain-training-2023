import PropTypes from 'prop-types';
import React from 'react'
import Select from '../Select/Select';
import Button from '../Button/Button';
import { useState } from 'react';
import {IndexPageConstants} from '../../constants/pageConstants';

export const ExplorePageHeader = ({user=[]}) => {
    const [selected,setSelected] = useState("");
  return (
    <>
     <h3>{IndexPageConstants.HEADER_TITLE}</h3>
          <h1>
          
            {IndexPageConstants.HEADER_DESCRIPTION}<span>{IndexPageConstants.HEADER_DESCRIPTION_SPAN}</span>
          </h1>
          <Select onChange={(e)=>{setSelected(e.target.value);}} user={user}/>
          <Button name="EXPLORE" path= {`/details/${selected}`}></Button>
    </>
  )
}

ExplorePageHeader.prototype={
  user:PropTypes.array.isRequired,
}
