import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setWarningModalStatus } from '../../slices/blogSlice';
import { INPUT_TYPE_CONTSTANT } from '../../constants/littleBookConstants';
import PropTypes from 'prop-types';

export const InputTag = ({ name = '', onChange = () => { } }) => {
  const depatch = useDispatch();
  const inputRef = useRef(null);
  const { addNewBlogActive, isEditingStatus } = useSelector(state => {
    return state.blogs;
  });
  const toggleHandler = () => {
    if (isEditingStatus || addNewBlogActive) {
      inputRef.current.checked = !inputRef.current.checked;
      depatch(setWarningModalStatus(true));
    }
    else { onChange(name.slice(0, -7)) }
  }

  return (
    <input ref={inputRef} id={name} type={INPUT_TYPE_CONTSTANT.CHECKBOX} defaultChecked={true} name={name} value={name} onChange={toggleHandler} readOnly={!isEditingStatus} />
  )
}

InputTag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTag;
