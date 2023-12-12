import React, { useRef } from 'react'
import Button from '../button/Button';
import style from './CreateNewBlogs.module.scss'
import { useDispatch } from 'react-redux';
import { addNewBlog, setAddNewBlogStatus } from '../../slices/blogSlice';
import { BUTTON_CONSTANTS, ADD_NEWBLOG_CONSTANT ,BLOGS_CONTENT_EMPTY_ERROR} from '../../constants/littleBookConstants';
import { showToast } from '../../utils/littleBookUtils/blogFinder';


const CreateNewBlogs = () => {
    const dispatch = useDispatch();
    const titleRef = useRef();
    const detailsRef = useRef();

    const createBlog = () => {
        const titleContent = titleRef.current.value.trim();
        const detailContent = detailsRef.current.value.trim();
        if (!titleContent.length <= 0 || !detailContent.length <= 0) {
            dispatch(addNewBlog({ title: titleContent, details: detailContent, photo: ADD_NEWBLOG_CONSTANT.PHOTO, type: ADD_NEWBLOG_CONSTANT.TYPE }));
            dispatch(setAddNewBlogStatus(false));
        }else{
            showToast(BLOGS_CONTENT_EMPTY_ERROR);
        }
    }
    return (
        <>
            <p className={style.modalTitle}>{ADD_NEWBLOG_CONSTANT.TITLE}</p>
            <div className={style.inputContainer}>
                <input ref={titleRef} type={ADD_NEWBLOG_CONSTANT.TITLE_INPUT_TAG_TYPE} className={style.blogTitle} placeholder={ADD_NEWBLOG_CONSTANT.TITLE_INPUT_TAG_PLACEHOLDER} />
                <textarea ref={detailsRef} className={style.blogDetails} placeholder={ADD_NEWBLOG_CONSTANT.DETAILS_INPUT_TAG_PLACEHOLDER} />
            </div>
            <div className={style.buttonContainer}>
                <Button name={BUTTON_CONSTANTS.ADD_BUTTON} onClick={createBlog}></Button>
            </div>
        </>
    )
}



export default CreateNewBlogs