import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    const [colorMode, setColorMode] = React.useState("")

    const colorToggle = () => {
        setColorMode(prevMode => (
            prevMode === "" ? "dark" : ""
        ))
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={colorMode}
                toggleDarkMode={colorToggle}
            />
            <Main darkMode={colorMode}/>
        </div>
    )
}