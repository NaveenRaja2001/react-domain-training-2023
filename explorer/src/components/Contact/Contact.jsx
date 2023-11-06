import React,{useState} from "react";
import style from '../Contact/contact.module.css';
import Select from "../Select/Select";
import Button from "../Button/Button";

function Contact({user})
{
    const [name,setName]=useState("")
    const [homeTown,sethomeTown]=useState("")
    const [destination,setdestination]=useState("")
    const [number,setNumber]=useState("")
    const [isubmitted,setIsSubmitted]=useState(false)
    
    function handleSubmit(e){
        setIsSubmitted(true)
         e.preventDefault()
         console.log(name+'  '+homeTown+ ' '+destination+'  '+number);
         console.log(e.target);
    }
    
    return(
        <>
        <div id={style.bottomContainer}>
            <form className={style.contactform} onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <h3>Our Sales Team will reach out  you ASAP!</h3>
                <h4>Name</h4>
                <input type="name" onChange={(e)=>{setName(e.target.value);}} required/>
                <h4>Your home Town </h4>
               <Select onChange={(e)=>{sethomeTown(e.target.value);}} user={user}/>
                <h4>Where would you like to go?</h4>
                <Select onChange={(e)=>{setdestination(e.target.value);}} user={user}/>
                <h4>Contact Number</h4>
                <input type="number" onChange={(e)=>{setNumber(e.target.value);}} required/>
                <Button name="SUBMIT INTEREST"></Button>
            </form>
            {
                isSubmitted &&
                (<div className={style.formCard}>
                    <p>
                        Thank You {name} for expressing your interest in travelling with us .Our Sales team will get back with the best packages from {homeTown} to {destination}.
                    </p>
                </div>)
            }
        </div>
        </>
    )
}
export default Contact;