import PropTypes from 'prop-types';
import React,{useState} from "react";
import style from '../Contact/contact.module.css';
import Select from "../Select/Select";
import Button from "../Button/Button";
import {FormConstants} from '../../constants/pageConstants'
import {formResultCard} from '../../utils/ExplorerUtils'
import Input from '../Input/Input';

function Contact({user=[]})
{
    const [name,setName]=useState("")
    const [homeTown,sethomeTown]=useState("")
    const [destination,setdestination]=useState("")
    const [number,setNumber]=useState("")
    const [isubmitted,setIsSubmitted]=useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitted(true)
    }
    
    return(
        <>
        <div id={style.bottomContainer}>
            <form className={style.contactform} onSubmit={handleSubmit}>
                <h1>{FormConstants.TITLE}</h1>
                <h3>{FormConstants.DESCRIPTION}</h3>
                <h4>{FormConstants.LABELS.NAME}</h4>
                <Input type={FormConstants.FORM_NAME_INPUT_TYPE} onChange={(e)=>{setName(e.target.value);}}/>
                <h4>{FormConstants.LABELS.HOME_TOWN} </h4>
               <Select onChange={(e)=>{sethomeTown(e.target.value);}} user={user}/>
                <h4>{FormConstants.LABELS.DESTINATION}</h4>
                <Select onChange={(e)=>{setdestination(e.target.value);}} user={user}/>
                <h4>{FormConstants.LABELS.CONTACT_NUMBER}</h4>
                <Input type={FormConstants.FORM_CONTACT_INPUT_TYPE} onChange={(e)=>{setNumber(e.target.value);}}/>
                <Button name={FormConstants.BUTTON_NAME}></Button>
            </form>
            {
                isubmitted &&
                (<div className={style.formCard}>
                    <p>
                    {formResultCard(name,homeTown,destination)}
                    </p>
                </div>)
            }
        </div>
        </>
    )
}
export default Contact;

Contact.prototype={
    user:PropTypes.array.isRequired,
 }