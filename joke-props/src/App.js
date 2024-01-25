import React from 'react';
import Joke from './Components/Joke'
import JokesData from './jokesData'



export default function App(){
    const jokeList = JokesData.map(joke => (
        <Joke setup = {joke.setup} punch = {joke.punchline}/>
    ));

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    console.log(jokeList)
    return (
        <div>
            {jokeList}
        </div>
    )
}