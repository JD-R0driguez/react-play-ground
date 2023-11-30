import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/Footer';
import './assets/styles.css';



const Page = ()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<Page/>, document.getElementById('root'));

