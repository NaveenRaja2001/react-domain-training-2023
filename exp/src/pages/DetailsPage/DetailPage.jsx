
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../../components/header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import Contact from "../../components/Contact/Contact";
import titleContainerImg from '../../assets/images/thanjavur.png';
import style from './DetailPage.module.css';
import {toggleScrolling} from '../../utils/ExplorerUtils';
import Loader from '../../components/Loader/Loader';
import {fetchUserData,fetchRelatedArea,fetchtemp} from '../../service/ApiService'

export const DetailPage = () => {
    const [loader, setLoader] = useState(true);
    const [temp, setTemp] = useState('-');
    const { placeName } = useParams();
    const [places, setUsers] = useState([]);
    const [placeData, setPlaceData] = useState({});
    const containerTitle = "Similar Destinations";
    const containerDescription = `Because you liked ${placeName}`;
    useEffect(() => {
        fetchUserData().then(data=>{
            setUsers(data)   
        })
        fetchRelatedArea(placeName).then(data=>{
            setPlaceData(data)  
            console.log(data)
        })
        fetchtemp(placeName).then(data=>{
            setTemp(data)  
        })
        setLoader(false)
    }, [placeName]);
    const relatedPlacesCardName = placeData?.relatedPlaces;
    const relatedPlacesCardDetails = [];

    const placeDescription = placeData?.fullDescription?.split("\\n")
        .map((content, idx) => {
            return <p key={idx}>{content}</p>
        });

    return (
        <> 
       {loader?<Loader/>:''}
        {loader?toggleScrolling(true):toggleScrolling(false)}
             <>
                    {places.forEach((ele) => {
                        if (relatedPlacesCardName?.includes(ele.city)) {
                            relatedPlacesCardDetails.push(ele);
                        }
                    })}
                    <Header place={placeData.place} headerImg={titleContainerImg} city={placeData.city} img={`../../assets/images/${placeData.city}.png`} page={true} temp={temp} />
                  
                    <div className={style.placeDescription}>
                        {placeDescription}
                    </div>
                    <CardContainer user={relatedPlacesCardDetails} containerTitle={containerTitle} containerDescription={containerDescription} />
                   
                    <Contact user={places} />
                    </>
        </>
    );
}
