import { Audio } from 'react-loader-spinner';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../../components/header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import Contact from "../../components/Contact/Contact";
import titleContainerImg from '../../assets/images/thanjavur.png';
import style from './DetailPage.module.css';
import {toggleScrolling} from '../../constants/pageConstants';
import Loader from '../../components/Loader/Loader';

export const DetailPage = () => {
    const [loader, setLoader] = useState(true);
    const [temp, setTemp] = useState('-');
    const { placeName } = useParams();
    const [places, setUsers] = useState([]);
    const [placeData, setPlaceData] = useState({});
    const containerTitle = "Similar Destinations";
    const containerDescription = `Because you liked ${placeName}`;
    const fetchaxis = () => {
        fetch("https://nijin-server.vercel.app/api/explorer")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
        fetch(  
                `https://nijin-server.vercel.app/api/explorer/places/${placeName}`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setPlaceData(data);
                });
        fetch(`https://api.weatherapi.com/v1/current.json?key=5d18d19ccebb4f13abe133700231804&q=${placeName}&aqi=no`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setTemp(data?.current?.temp_c)
                })
                setLoader(false);
    };
    // const fetchRelatedArea = () => {
    //     fetch(
    //         `https://nijin-server.vercel.app/api/explorer/places/${placeName}`
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setPlaceData(data);
    //         });
    // };
    // const fetchtemp = () => {
    //     fetch(`https://api.weatherapi.com/v1/current.json?key=5d18d19ccebb4f13abe133700231804&q=${placeName}&aqi=no`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setTemp(data?.current?.temp_c)
    //         })
    // };
    useEffect(() => {
        fetchaxis();
        // fetchRelatedArea();
        // fetchtemp();
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
