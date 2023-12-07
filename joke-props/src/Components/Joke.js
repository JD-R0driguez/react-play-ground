import React from 'react';
import './Joke.css'

export default function Joke(props){
    return(
        <div className='text'>
            <h3>{props.setup}</h3>
            <p>{props.punch}</p>
            <hr/>
        </div>
    )
}