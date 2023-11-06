// import React, { useEffect, useState } from "react";
// import Header from '../../components/header/Header';
// import CardContainer from '../../components/CardContainer/CardContainer';
// import Contact from "../../components/Contact/Contact";
// import titleContainerImg from '../../assets/images/thanjavur.png';

// export const DetailPage = () => {
//     const containerTitle="Destinations";
//     const containerDescription="Just for you. Because you and your bike are special to us!";
//     const [user, setUsers] = useState([]);
//     const fetchUserData = () => {
//         fetch("https://nijin-server.vercel.app/api/explorer")
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 setUsers(data)
//             })
//     }
//     useEffect(() => {
//         fetchUserData();
//     }, [])
//     return (
//         <>
//             <Header user={user} headerImg={titleContainerImg} />
//             <CardContainer user={user} containerTitle={containerTitle} containerDescription={containerDescription}/>
//             <Contact user={user}/>
//         </>

//     );
// }


