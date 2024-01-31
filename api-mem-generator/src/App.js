import React from "react";
import Contact from './components/Contact'
import Header from './components/Header'
import MemeBox from './components/Meme'


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
            <Contact />        
            {/* <Header />
            <MemeBox /> */}
        </div>
    )
}

export default App;