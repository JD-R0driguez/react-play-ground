import React from 'react';
import Joke from './Components/Joke'
import JokesData from './jokesData'



export default function App(){
    const jokeList = JokesData.map(joke => (
        <Joke setup = {joke.setup} punch = {joke.punchline}/>
    ));
    console.log(jokeList)
    return (
        <div>
            {jokeList}
        </div>
    )
}