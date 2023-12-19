import React from "react";
import memesData from '../memesData'
import './Meme.css'


export default function Meme(){
    
    const [memeImage, setMemeImage] = React.useState();

    function handleClick(){
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomMemeUrl =  memesArray[randomIndex].url;

        setMemeImage(image => randomMemeUrl)
    }

    return (
        <main>
            <div id="meme-form">

                <input className="box-input" type="text" id="top-input" name="top-input" placeholder="Top text"/>
                <input className="box-input" type="text" id="bottom-input" name="bottom-input" placeholder="Bottom text"/>

                <button 
                    onClick={handleClick}
                    className="submit-button" 
                    type="submit">Get a new meme image  🖼
                </button>
            </div>
            <img src={memeImage} width="300px"/>
        </main>
    )
}