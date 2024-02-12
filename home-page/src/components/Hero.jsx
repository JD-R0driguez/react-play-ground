import React from "react";
import TextAnimation from "./TextAnimation";
import './Hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <div className="back-image fade-img"></div>
            <section className="hero-title">
                <TextAnimation text="Hi," />
                <p className="title-space"><TextAnimation text="I'm" /><TextAnimation text="Juan" /></p>
                <TextAnimation text="I build things for the web"/>
            </section>
        </div>
    )
}

