import React from 'react'
import Select from '../Select/Select';
import Button from '../Button/Button';
import { useState } from 'react';

export const ExplorePageHeader = ({user=[]}) => {
    const [selected,setSelected] = useState("");
  return (
    <>
     <h3>WELCOME TO EXPLORER</h3>
          <h1>
          
            Your Adventure Travel Expert in the <span>SOUTH</span>
          </h1>
          <Select onChange={(e)=>{setSelected(e.target.value);}} user={user}/>
          <Button name="EXPLORE" path= {`/details/${selected}`}></Button>
    </>
  )
}
