import React from "react";
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import placesData from "./placesData"


export default function App(){
    
    const arrayOfPlaces = placesData.map(place =>(
        <Card
            {...place}
        />
    ));
    return(
        <div>
            <Header/>
            {arrayOfPlaces}
        </div>
    
    )
}