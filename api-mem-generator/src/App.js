import React from "react";
import Header from './components/Header'
import MemeBox from './components/Meme'
import './styles.css'

function App(){

    const [counter, setCounter] = React.useState(0);

    function handleClickMinus(){
        setCounter(content => content - 1)
    }
    
    function handleClickPlus(){
        setCounter(content => content + 1)
    }

    return (
        <div>            
            <Header />

            <div className="counter">
                <button onClick={handleClickMinus} className="counter--minus">-</button>
                <div className="counter--count">
                    <h1>{counter}</h1>
                </div>
                <button onClick={handleClickPlus}className="counter--plus">+</button>
            </div>
            {/* <MemeBox /> */}
        </div>
    )
}

export default App;