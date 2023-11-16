import React from 'react'
import style from '../Loader/Loader.module.scss'

export const Loader = () => {
  return (
    <div className={`${style.loaderHeader} ${style.overlay}`}>
            <span className={style.loader}></span> 
            </div>
  )
}

export default Loader;