import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';



const Page = ()=>{
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

function Body(){
    return (
        <body>
            <h1>Fun Facts About React</h1>
            <ReactFacts/>
            <h1>Why do I want to lear React</h1>
            <WhyReact/>
            <Footer/>
        </body>
    )
}

function ReactFacts(){
    return(
        <ul className="sub-list">
            <li>Component-Based Architecture</li>
            <li>Virtual DOM for Performance Optimization</li>  
            <li>Developed by Facebook</li>
            <li>JSX - JavaScript Syntax Extension</li>
            <li>React Native for Cross-Platform Development</li> 
        </ul>
    )
}

const WhyReact = () =>{
    return(
        <ul className="sub-list">
            <li>Enables easier creation of interactive user interfaces.</li>
            <li>Extensive community support and rich documentation.</li>
            <li>Enhances career prospects due to its industry prevalence.</li>
        </ul>
    )
}


ReactDOM.render(<Page/>, document.getElementById('root'));

