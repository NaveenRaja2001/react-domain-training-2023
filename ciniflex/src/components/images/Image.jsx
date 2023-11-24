import React from 'react';
import {ERROR_IMAGE} from '../../constants/pageConstant';
import PropTypes from 'prop-types';

 const Image = ({alt,src,style,onClick}) => {
    const handleBrokenImage = er => {
        er.target.src = {ERROR_IMAGE};
    };
  return (
        <img className={style} alt={alt} src={src} onError={handleBrokenImage} onClick={onClick}/>
  )
}

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    style: PropTypes.string,
    onClick: PropTypes.func,
  };

export default  Image;

