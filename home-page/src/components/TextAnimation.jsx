import React from 'react';
import './TextAnimation.css';

export default function TextAnimation({ text }) {
    
    const letters = text.split('')
    const lettersArray = chars.span(char, index =>(
        <span key={index} className={`letter ${index < lettersVisible ? 'visible' : ''}`}>
            {char}
        </span>
    ))
    return (
        <div className="text-animation">
            {lettersArray}
        </div>
    );
}

