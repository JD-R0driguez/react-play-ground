import React from "react";



export default function Card(props){
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="card-photo" src={props.imageSource} width="125px" height="168" alt=""/>
            </div>
            <div className="text-container">
                <div className="location-text"><h2>{props.location}</h2></div>
                <a className="google-location-text" href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className="place-name">{props.title}</h1>
                <h1 className="travel-dates">{props.startDate}{props.endDate}</h1>
                <h3 className="place-info">{props.description}</h3>
            </div>
        </div>
    )
}