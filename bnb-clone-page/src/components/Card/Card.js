import React from 'react'
import './Card.css'

export default function Card(props){
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


    return(
        <div className='card'>
            
            <img className="card-image" src={props.img}/>
            
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


