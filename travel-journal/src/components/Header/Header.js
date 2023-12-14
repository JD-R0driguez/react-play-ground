import React from 'react'
import Icon from '../../assets/icon.svg'
import './Header.css'

function Header(){
    return (
        <nav>
            <img src={Icon} className='world-icon' alt='travel-journal-logo'/>
            <span className='header-title'>my travel journal.</span>
        </nav>
    )
}


export default Header;