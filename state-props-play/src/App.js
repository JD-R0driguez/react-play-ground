import React from 'react';
import boxes from "./boxes"
import Box from './components/Box'
import './styles.css'



export default function App(){

    const [boxesArray, setBoxesArray] = React.useState(boxes) 

    const boxArray = boxesArray.map(box => {
        return <Box id={box.id} state={box.on}/>
    })

    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    
    return (
        <div>
            <h1>{[boxArray]}</h1>
        </div>
    )
}