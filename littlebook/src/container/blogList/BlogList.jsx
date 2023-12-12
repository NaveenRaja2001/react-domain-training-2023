import React, { useEffect } from 'react';
import styles from './BlogList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent, setWarningModalStatus, setAddNewBlogStatus } from '../../slices/blogSlice';
import { getBlogs } from '../../store/index'
import ContentCard from '../../components/blogs/Blogs';
import Button from '../../components/button/Button';
import EmptyCart from '../../components/emptyCart/EmptyCart';
import { BUTTON_CONSTANTS ,SEARCH_BAR} from '../../constants/littleBookConstants';

export const BlogList = () => {

  const dispatch = useDispatch();
  const {  addNewBlogActive, filteredBlogData, isEditingStatus} = useSelector(state => {
    return state.blogs;
  });

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  const searchHandler = (e) => {
    dispatch(searchContent(e.target.value))
  }

  const focusHandlers = () => {
    if (isEditingStatus) {
      dispatch(setWarningModalStatus(true))
    }
  }
  const addNewBlogsHandler = () => {
    (isEditingStatus || addNewBlogActive) ?dispatch(setWarningModalStatus(true)):dispatch(setAddNewBlogStatus(true));
    }
  const content = filteredBlogData?.map((ind, key) => <ContentCard key={key} content={ind} />)
  return (
    <div className={styles.contentContainer}>
      <div>
        <input type={SEARCH_BAR.TYPE}  placeholder={SEARCH_BAR.SEARCH_PLACEHOLDER} onChange={(e) => searchHandler(e)} onFocus={() => focusHandlers()} readOnly={isEditingStatus} />
        <Button name={BUTTON_CONSTANTS.NEW} onClick={() => addNewBlogsHandler()} />
      </div>
      {(content.length === 0) ? <EmptyCart /> : <div className={styles.content}>
        {content}
      </div>}
    </div>


  )
}

export default BlogList;
