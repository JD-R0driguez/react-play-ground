import React from 'react'
import Logo from '../../assets/bnb-experiences.png'
import './Hero.css'

function Hero(){
    return (
        <div className='hero'>
            <div className='img-container'>
                <img src={Logo} className='back-img' alt='air bnb experiences'/>
            </div>
            <div className='text-container'>
                <div className='hero-main-text'>Online Experiences</div>
                <div className='hero-text'>
                    Join unique interactive activities 
                    led by one-of-a-kind hosts—all without 
                    leaving home.
                </div>
            </div>
        </div>
    )
}


export default Hero;