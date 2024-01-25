import React from 'react';
import './Joke.css'

export default function Joke(props){

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    return(
        <div className='text'>
            <h3>{props.setup}</h3>
            <p>{props.punch}</p>
            <hr/>
        </div>
    )
}