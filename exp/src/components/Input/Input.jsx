import React from 'react'

export const Input = ({type='text',onchange}) => {
  return (
    <>
    <input type={type} onChange={onchange} required/>
    </>
  )
}


export default Input;