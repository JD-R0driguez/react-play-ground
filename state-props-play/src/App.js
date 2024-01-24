import React from 'react';
import boxes from "./boxes"
import Box from './components/Box'
import './styles.css'



export default function App(){

    const [boxesArray, setBoxesArray] = React.useState(boxes) 

    function toggleBox(boxId) {
        setBoxesArray(prevBoxes =>
          // Map over the previous array to create a new array 
          // with updated box states
          prevBoxes.map(box =>
            // Check if the current box has the same ID as the clicked box
            // If yes, create a new box object with the state toggled
            // If no, keep the current box object unchanged
            box.id === boxId ? { ...box, on: !box.on } : box
          )
        )
      }
    
    const boxArray = boxesArray.map(box => {
        return <Box 
                    key={box.id}
                    boxId={box.id} 
                    state={box.on}
                    handleClick={toggleBox}
                />
    })
    
    return (
        <div>
            <h1>{boxArray}</h1>
        </div>
    )
}