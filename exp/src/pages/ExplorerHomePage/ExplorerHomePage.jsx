import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import Contact from "../../components/Contact/Contact";
import titleContainerImg from '../../assets/images/thanjavur.png'
import {IndexPageConstants } from '../../constants/pageConstants'
import {toggleScrolling} from '../../utils/ExplorerUtils';
import Loader from '../../components/Loader/Loader';
import {fetchUserData} from '../../service/ApiService'
const ExplorerHomePage = () => {
    const containerTitle=IndexPageConstants.CONTAINER_TITLE;
    const containerDescription=IndexPageConstants.CONTAINER_DESCRIPTION;
    const [loader, setLoader] = useState(true);
    const [user, setUsers] = useState([]);
    useEffect(() => {
        fetchUserData().then(data=>{
            setUsers(data)
            setLoader(false)
        })
       
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

export default ExplorerHomePage;