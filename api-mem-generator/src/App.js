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

    const isGoingOut = true
    
    let answer  // Use ternary here
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }

    return (
        <div>            
            <Header />
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div className="state--value">
                    <h1>{answer}</h1>
                </div>
            </div>
            {/* <MemeBox /> */}
        </div>
    )
}

export default App;