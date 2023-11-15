import React from 'react'

export const fetchUserData = async() => {
  return (
   await fetch("https://nijin-server.vercel.app/api/explorer")
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
  )
}

export const fetchRelatedArea = async(placeName) => {
   const response= await fetch(
        `https://nijin-server.vercel.app/api/explorer/places/${placeName}`
    )
    return await response.json()
};
export const fetchtemp = async(placeName) => {
   const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=5d18d19ccebb4f13abe133700231804&q=${placeName}&aqi=no`)
      const temp= await response.json()
      return temp?.current?.temp_c
      
};