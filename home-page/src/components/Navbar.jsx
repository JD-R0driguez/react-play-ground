import React from "react";


export default function Navbar(){
    return (
        <div>
            <div className="logo--image"></div>
            <div className="nav--links">
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <button className="resume--button">Resume</button>
            </div>
        </div>
    )
}