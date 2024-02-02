import React from "react";
import './Navbar.css'


export default function Navbar(){
    return (
        <nav className="nav-bar">
            <div className="logo-image">
                <button className="motion-button logo">JR</button>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <a className="header-anchor-tag" href="">About</a>
                    </li>
                    <li>
                        <a className="header-anchor-tag" href="">Projects</a>
                    </li>
                    <li>
                        <a className="header-anchor-tag" href="">Contact</a>
                    </li>
                </ul>
                <button className="motion-button resume">Resume</button>
            </div>
        </nav>
    )
}