import React from "react";
import Header from './components/Header'
import MemeBox from './components/Meme'
import './styles.css'

function App(){
    return (
        <div>            
            <Header />

            <div className="counter">
                <button className="counter--minus">-</button>
                <div className="counter--count">
                    <h1>0</h1>
                </div>
                <button className="counter--plus">+</button>
            </div>
            {/* <MemeBox /> */}
        </div>
    )
}

export default App;