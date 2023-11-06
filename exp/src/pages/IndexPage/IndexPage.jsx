import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import Contact from "../../components/Contact/Contact";
import titleContainerImg from '../../assets/images/thanjavur.png'
import {IndexPageConstants } from '../../constants/pageConstants'
const IndexPage = () => {
    const containerTitle=IndexPageConstants.CONTAINER_TITLE;
    const containerDescription=IndexPageConstants.CONTAINER_DESCRIPTION;
    const [user, setUsers] = useState([]);
    const fetchUserData = () => {
        fetch("https://nijin-server.vercel.app/api/explorer")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <>
            <Header user={user} headerImg={titleContainerImg} img={`../../assets/images/explorer.webp`}/>
            <CardContainer user={user} containerTitle={containerTitle} containerDescription={containerDescription}/>
            <Contact user={user}/>
        </>

    );
}

export default IndexPage;