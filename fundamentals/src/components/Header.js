import React from 'react';
import Logo from '../images/react-logo.svg';

function Header(){
    return(
        <nav>
            <img src={Logo} className="logo-image" alt="react logo" height="auto"/>
            <ul className='item-list'>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Header;

