import React from 'react';
import boxes from "./boxes"
import './styles.css'



export default function App(){

    const [boxesArray, setBoxesArray] = React.useState(boxes) 

    const boxArray = boxesArray.map(box => {
        return <div className="box" id={box.id} state={box.on}></div>
    })

    return (
        <div>
            <h1>{[boxArray]}</h1>
        </div>
    )
}