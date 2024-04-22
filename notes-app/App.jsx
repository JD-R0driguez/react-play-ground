import React from "react"
import Split from "react-split"
import { nanoid } from "nanoid"
import './Styles.css'

export default function App() {
    return(
    <Split
        className="split"
    >
        <div>Left</div>
        <div>Right</div>
    </Split>
    )
}