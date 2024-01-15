import React from 'react'
import './Card.css'
import StarIcon from '../../assets/rating.svg'

export default function Card(props){
    console.log("---------------------------------")
    console.log(props);
    let badgeText;
    if (props.spotsAvailable === 0) badgeText = "SOLD OUT";
    else if (props.location === "Online") badgeText = "ONLINE";

    return(
        <div className='card'>
            <img className="card-image" src={props.img}/>
            {badgeText && <div className='badge'>{badgeText}</div>  }
            <div className='text-container'>
                <div className='top-line'>
                    <img className="star" src={StarIcon}/>
                    {props.rating}
                    <div className='gray-text'>
                        ({props.reviewCount}) - {props.location}
                    </div>   
                </div>
                {props.subtitle}<p></p>
                <strong className='price'>From ${props.price}</strong> / person
            </div>


        </div>
    )
}

