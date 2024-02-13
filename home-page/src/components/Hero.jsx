import React from "react";
import TextAnimation from "./TextAnimation";
import './Hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <div className="back-image fade-img"></div>
            <section className="hero-title">
                {/* <TextAnimation text="Hi" style="theme-1"/> */}
                <TextAnimation text="Hi, I'm Juan" style="theme-1"/>
                <TextAnimation text="I build things for the web" style="theme-2"/>
            </section>
        </div>
    )
}

