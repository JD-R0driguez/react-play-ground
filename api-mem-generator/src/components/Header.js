import React from 'react'
import './Header.css'



function Header(){
    return(
        <nav>
            <div className='icon-logo'>
                <h3 className='text-icon'>Meme Generator</h3>
            </div>
            <h4 className='right-header-text'>React Course - Project 3</h4>
        </nav>
    )
};

export default Header;