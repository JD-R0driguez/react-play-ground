import React from 'react';
import boxes from "./boxes"
import Box from './components/Box'
import './styles.css'



export default function App(){

    const [boxesArray, setBoxesArray] = React.useState(boxes) 

    const boxArray = boxesArray.map(box => {
        return <Box id={box.id} state={box.on}/>
    })

    return (
        <div>
            <h1>{[boxArray]}</h1>
        </div>
    )
}