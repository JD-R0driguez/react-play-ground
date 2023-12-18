import React from "react";
import './Meme.css'


export default function Meme(){
    return (
        <main>
            <form id="meme-form">

                <input className="box-input" type="text" id="top-input" name="top-input" placeholder="Shut Up"/>
                <input className="box-input" type="text" id="bottom-input" name="bottom-input" placeholder="And take my money"/>

                <button className="submit-button" type="submit">Get a new meme image  🖼</button>
                </form>
        </main>
    )
}