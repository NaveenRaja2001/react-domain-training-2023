import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentContent, setWarningModalStatus } from '../../slices/blogSlice';
import styles from './Blogs.module.scss';
import PropTypes from 'prop-types';

export const ContentCard = ({ content = {} }) => {
  const dispatch = useDispatch();
  const { addNewBlogActive, isEditingStatus, selectedContent } = useSelector(state => {
    return state.blogs;
  });
  const individualCardHandler = () => {
    (isEditingStatus || addNewBlogActive) ? dispatch(setWarningModalStatus(true)) : dispatch(setCurrentContent(content))
  }
  return (
    <div className={(selectedContent?.title === content?.title) ? styles.selected : ''} onClick={() => individualCardHandler()} >
      <h3>{content.title}</h3>
      <h4>{content.type}</h4>
      <p>{content.details}</p>
    </div>
  )
}

ContentCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};


export default ContentCard;