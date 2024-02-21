import React from "react";
import 'animate.css';
import './Navbar.css'


export default function Navbar(){
    return (
        <nav className="nav-bar">
            <div className="logo-image">
                <button className="motion-button logo animate__animated animate__fadeIn">JR</button>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="about animate__animated animate__fadeInDown">
                        <a className="header-anchor-tag" href="">About</a>
                    </li>
                    <li className="projects animate__animated animate__fadeInDown">
                        <a className="header-anchor-tag" href="">Projects</a>
                    </li>
                    <li className="contact about animate__animated animate__fadeInDown">
                        <a className="header-anchor-tag" href="">Contact</a>
                    </li>
                </ul>
                <button className="motion-button resume animate__animated animate__fadeInDown">Resume</button>
            </div>
        </nav>
    )
}