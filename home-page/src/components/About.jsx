import React from "react";
import aboutImage from '../assets/about.png'
import './About.css'

export default function About(){
    return (
        <section className="about">
            <div className="about-title">
                <h4>Get To Know More</h4>
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-text">
                    <p>
                        <span className="about-text-color">Hi there!</span> I am Juan and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2020 when I decided to tackle creating
                        a website for my woodworking business. — turns out attempting to create a custom button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                        I have a background in mechatronics engineer and love programming because it is so practical, and I can solve real-world challenges with it. For me, programming is a tool to express myself in a creative way. Plus, there is so much to
                        explore that always keeps me excited!
                    </p>
                    <p>
                        Today I'm enthralled by web development. Creating new experiences,
                        implementing eye pleasing designs and making them come to life with animation is what I do best.
                    </p>
                </div>
                <did className="image-container">
                    <img src={aboutImage} alt=""/>
                </did>
            </div>

            <div>Technologies</div>
        </section>

    )
}