import React from 'react';
import 'animate.css';
import './TextAnimation.css';

export default function TextAnimation(props) {
    console.log(props.text);
    const lettersArray = props.text.split('').map((char, index) => {

        const charType = char === ' ' ? "space" : "letter";
        return (<span key={index} className={`${charType} animate__animated animate__bounceInDown`} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
        </span>
        )
        });

    return (
        <div className="text-animation">
            {lettersArray}
        </div>
    );
}
