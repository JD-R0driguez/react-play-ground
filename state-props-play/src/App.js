import React from 'react';
import boxes from "./boxes"
import Box from './components/Box'
import './styles.css'



export default function App(){

    const [boxesArray, setBoxesArray] = React.useState(boxes) 

    const boxArray = boxesArray.map(box => {
        return <Box id={box.id} state={box.on}/>
    })

    // Challenge 4. Update the state of the arrays 
    // from the App component instead of the Box component
    // (to avoid code issues) use the setBoxesArray to achieve that.

    return (
        <div>
            <h1>{[boxArray]}</h1>
        </div>
    )
}