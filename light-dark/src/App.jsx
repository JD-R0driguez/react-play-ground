import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    const [isDarkMode, setIsDarkMode] = React.useState(false)

    const colorToggle = () => {
        setIsDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={isDarkMode}
                toggleDarkMode={colorToggle}
            />
            <Main darkMode={isDarkMode}/>
        </div>
    )
}