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

    const [isGoingOut, setIsGoingOut] = React.useState("No")

    function handleClick(){
        setIsGoingOut( prevContent => prevContent === "Yes" ? "No" : "Yes")
    }

    return (
        <div>            
            <Header />
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div onClick={handleClick} className="state--value">
                    <h1>{isGoingOut}</h1>
                </div>
            </div>
            {/* <MemeBox /> */}
        </div>
    )
}

export default App;