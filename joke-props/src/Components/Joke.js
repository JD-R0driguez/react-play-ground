import React from 'react';
import './Joke.css'

export default function Joke(props){

    const [isShown, setIsShown] = React.useState(false)
    //Toggle function sets isShown using the set state value
    function toggleDisplay(){
        setIsShown(preState => !preState)
    }

    return(
        <div className='text'>
            <h3>{props.setup}</h3>
            {/* Added a conditional rendering  */}
            {isShown && <p>{props.punch}</p>}
            <button onClick={toggleDisplay}>{isShown? "Hide":"Show" } Punch Line</button>
            <hr/>
        </div>
    )
}