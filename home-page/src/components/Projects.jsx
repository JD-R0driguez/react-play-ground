import React from "react";
import About from '../assets/about.png'
import './Projects.css'


export default function Projects() {
    return (
        <section className="projects">
            <div className="projects-title">
                <h4>Check Out Some</h4>
                <h1>Projects I've Built</h1>
            </div>
            <div className="section-projects">
                <div className="project-container-right">
                    <div className="project-image-container">
                        <img src={About} alt="project description"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">-This Project-</h2>
                            <div className="text-overlap">
                                <p>-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                </p>
                            </div>
                            <h2 className="tech-stack">-Tech used here-</h2>
                            <div className="links">
                                <button className="live-code">-I am a button-</button>
                                <button className="repo-link">-I take you to github-</button>
                            </div>
                    </div>
                </div>
                <div className="project-container-left">
                    <div className="project-image-container">
                        <img src={About} alt="project description"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">-This Project-</h2>
                            <div className="text-overlap">
                                <p>-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                </p>
                            </div>
                            <h2 className="tech-stack">-Tech used here-</h2>
                            <div className="links">
                                <button className="live-code">-I am a button-</button>
                                <button className="repo-link">-I take you to github-</button>
                            </div>
                    </div>
                </div>
                <div className="project-container-right">
                    <div className="project-image-container">
                        <img src={About} alt="project description"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">-This Project-</h2>
                            <div className="text-overlap">
                                <p>-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                </p>
                            </div>
                            <h2 className="tech-stack">-Tech used here-</h2>
                            <div className="links">
                                <button className="live-code">-I am a button-</button>
                                <button className="repo-link">-I take you to github-</button>
                            </div>
                    </div>
                </div>
                <div className="project-container-left">
                    <div className="project-image-container">
                        <img src={About} alt="project description"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">-This Project-</h2>
                            <div className="text-overlap">
                                <p>-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                Project description goes here-Project description goes here-
                                </p>
                            </div>
                            <h2 className="tech-stack">-Tech used here-</h2>
                            <div className="links">
                                <button className="live-code">-I am a button-</button>
                                <button className="repo-link">-I take you to github-</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}