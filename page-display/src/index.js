import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import './assets/styles.css';




function Page (){
    return(
        <>
            <Header/>
            <Main/>
        </>
    )
}

ReactDOM.render(<Page/>, document.getElementById('root'));