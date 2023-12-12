import React from 'react'
import style from './NewBlogs.module.scss'
import { useDispatch } from 'react-redux';
import { setWarningModalStatus,setDisplayMembers, setEditStatus, addNewBlog, setAddNewBlogStatus } from '../../slices/blogSlice'
import CreateNewBlogs from '../createNewBlogs/CreateNewBlogs';
import MemberListCard from '../memberList/MemberListCard';
import PropTypes from 'prop-types';

export const NewBlogs = ({ memberList=[], isDisplayMember=false, loader=false }) => {
    const dispatch = useDispatch();

    const removeAddNewBlogHandler = () => {
        (isDisplayMember)? dispatch(setDisplayMembers(false)):dispatch(setWarningModalStatus(true))
    }
    return (
        <div className={style.blogContainer} >
            <div className={style.fadeContainer} onClick={removeAddNewBlogHandler}>

            </div>
            <div className={style.createBlogContainer}>
                {isDisplayMember ?
                    <MemberListCard memberList={memberList} loader={loader} /> : <CreateNewBlogs />}
            </div>
        </div>
    )
}

NewBlogs.propTypes = {
    memberList: PropTypes.array,
    isDisplayMember: PropTypes.bool,
    loader: PropTypes.bool,
  };

export default NewBlogs;