import React from 'react'
import Icon from '../assets/react-logo.svg'


const Header =()=>{
    return(
        <nav>
            <div className='icon-box'>
                <img src={Icon} className='react-icon' alt='react-icon'/>
                <h3 className='icon-text'>ReactFacts</h3>
            </div>
            <h4 className='header-sub-text'>React Course - Project 1</h4>
        </nav>
    )
}

export default Header;