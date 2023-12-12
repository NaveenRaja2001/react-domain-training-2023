import React from 'react';
import style from './WarningModal.module.scss'
import Button from '../button/Button';
import { setWarningModalStatus, setEditStatus, setAddNewBlogStatus, setDisplayMembers } from '../../slices/blogSlice'
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON_CONSTANTS, MODAL_CONSTANTS } from '../../constants/littleBookConstants';


export const WarningModal = () => {
    const dispatch = useDispatch();
    const { addNewBlogActive, isDisplayMember } = useSelector(state => {
        return state.blogs;
    });

    const continueHandler = () => {
        if (addNewBlogActive || isDisplayMember) {
            dispatch(setAddNewBlogStatus(false))
            dispatch(setDisplayMembers(false))
        }
        dispatch(setWarningModalStatus(false));
        dispatch(setEditStatus(false));
    };

    const cancelHandler = () => {
        if (!addNewBlogActive) { dispatch(setEditStatus(true)) }
        dispatch(setWarningModalStatus(false));
    }

    return (
        <div className={style.modalcontainerWapper}>
            <div className={style.modalContainer}>
                <div className={style.modalContent}>
                    <p className={style.modalTitle}>{MODAL_CONSTANTS.WARNING_MODAL_TEXT}</p>
                    <div className={style.buttonsContainer}>
                        <Button className={style.cancelButton} onClick={cancelHandler} name={BUTTON_CONSTANTS.CANCEL} style={style.cancelButton}></Button>
                        <Button className={style.continueButton} onClick={continueHandler} name={BUTTON_CONSTANTS.CONTINUE} style={style.continueButton}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarningModal;