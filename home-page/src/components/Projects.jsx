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
                <div className="project-container left">
                    <div className="project-image-container">
                        <img src={About} alt="project description"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Bootstrap Theme Page  </h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">A colorful</span> landing page using Bootstrap framework capabilities
                                    to create an appealing website with animated background color.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>Bootstrap      HTML5      CSS3      jQuery</pre></h2>
                            <div className="links">
                                <button className="live-code">Live 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                        <g id="external-link">
                                            <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                                            <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
                                        </g>
                                    </svg>
                                </button>
                                <button className="repo-link">Source &lt;/&gt;</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}