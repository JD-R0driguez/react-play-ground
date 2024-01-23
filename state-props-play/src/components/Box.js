import React from 'react';

function Box(props){

    const colorBackground = props.state? "#222222": "none"; 
    
    const styles = {
        backgroundColor: colorBackground
    }

    return (
        <div style={styles} className="box"></div>
    )
}

export default Box; 