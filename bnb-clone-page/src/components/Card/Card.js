import React from 'react'
import './Card.css'

export default function Card(props){
    return(
        <div className='card'>
            <div className='card-img-container'>
                <img className="card-image" src={props.img}/>
            </div>
            <div className='text-container'>
                <div className='top-line'>
                    <img className="star" src={props.ratingIcon}/>
                    {props.rating}
                    <div className='gray-text'>
                        ({props.revCount}) - {props.country}
                    </div>   
                </div>
                {props.subtitle}<p></p>
                <strong className='price'>Price {props.price}</strong> / {props.people}
            </div>


        </div>
    )
}


