import React from 'react'
import './Card.css'
import StarIcon from '../../assets/rating.svg'

export default function Card(props){

    let badgeText;
    if (props.item.spotsAvailable === 0) badgeText = "SOLD OUT";
    else if (props.item.location === "Online") badgeText = "ONLINE";

    return(
        <div className='card'>
            <img className="card-image" src={props.item.coverImg}/>
            {badgeText && <div className='badge'>{badgeText}</div>  }
            <div className='text-container'>
                <div className='top-line'>
                    <img className="star" src={StarIcon}/>
                    {props.item.stats.rating}
                    <div className='gray-text'>
                        ({props.item.stats.reviewCount}) - {props.item.location}
                    </div>   
                </div>
                {props.item.subtitle}<p></p>
                <strong className='price'>From ${props.item.price}</strong> / person
            </div>


        </div>
    )
}

