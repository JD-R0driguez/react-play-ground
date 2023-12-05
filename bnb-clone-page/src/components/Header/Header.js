import React from 'react'
import Logo from '../../assets/logo.svg'
import './Header.css'

function Header(){
    return (
        <nav>
            <img src={Logo} className='bnb-logo' alt='airbnb-logo'/>
        </nav>
    )
}


export default Header;