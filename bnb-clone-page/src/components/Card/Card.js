import React from 'react'
import './Card.css'
import StarIcon from '../../assets/rating.svg'

export default function Card(props){

    return(
        <div className='card'>
            <img className="card-image" src={props.img}/>        
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

