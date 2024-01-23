import React from 'react';

function Box(props){

    function handleClick(){
        //Toggle the box when clicked
        setBoxState(prevState => !prevState)
    }

    //State to manage te box's state (clicked / un-clicked)
    const [boxState, setBoxState] = React.useState(props.state)

    //Determine the back color based on the passed value from props
    const colorBackground = boxState? "#222222": "transparent"; 
    
    const styles = {
        backgroundColor: colorBackground
    }

    return (
        <button className='button--box' onClick={handleClick}>
            <div style={styles} className="box"></div>
        </button>
        
    )
}

export default Box; 