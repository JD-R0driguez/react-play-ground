import React from "react";
import locationIcon from "../../assets/location-icon.svg"
import "./Card.css"



export default function Card(props){
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="photo-card" src={props.imageSource}/>
            </div>
            <div className="text-container">
                <div className="location-text">
                    <img className="location-icon" src={locationIcon}/>
                    <h2>{props.location}</h2>
                    <a className="google-location-text" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="place-name">{props.title}</h1>
                <h1 className="travel-dates">{props.startDate}{props.endDate}</h1>
                <h3 className="place-info">{props.description}</h3>
            </div>
        </div>
    )
}