import React from 'react';

function Box(props){

    const colorBackground = props.state? "#222222": "transparent"; 

    const styles = {
        backgroundColor: colorBackground
    }

    return (
        <button className='button--box'onClick={()=> props.handleClick(props.boxId)}>
            <div style={styles} className="box"></div>
        </button>
        
    )
}

export default Box; 