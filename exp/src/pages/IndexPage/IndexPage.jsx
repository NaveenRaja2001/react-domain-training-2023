import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import Contact from "../../components/Contact/Contact";
import titleContainerImg from '../../assets/images/thanjavur.png'
import {IndexPageConstants } from '../../constants/pageConstants'
import {toggleScrolling} from '../../constants/pageConstants';
import Loader from '../../components/Loader/Loader';
const IndexPage = () => {
    
    const containerTitle=IndexPageConstants.CONTAINER_TITLE;
    const containerDescription=IndexPageConstants.CONTAINER_DESCRIPTION;
    const [loader, setLoader] = useState(true);
    const [user, setUsers] = useState([]);
    const fetchUserData = () => {
        fetch("https://nijin-server.vercel.app/api/explorer")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
            setLoader(false)
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <>
         {loader?<Loader/>:''}
        {loader?toggleScrolling(true):toggleScrolling(false)}
        <>
            <Header user={user} headerImg={titleContainerImg} img={`../../assets/images/explorer.webp`}/>
            <CardContainer user={user} containerTitle={containerTitle} containerDescription={containerDescription}/>
            <Contact user={user}/>
        </>
        </>

    );
}

export default IndexPage;