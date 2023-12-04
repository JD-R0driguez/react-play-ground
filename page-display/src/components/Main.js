import React from 'react';
import IconBack from '../assets/react-background.svg'


const Main = ()=>{
    return (
        <div className='main-body'>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={IconBack} className='icon-back' alt='react-icon'/>
        </div>
    )
}


export default Main;