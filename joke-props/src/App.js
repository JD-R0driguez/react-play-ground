import React from 'react';
import Joke from './Components/Joke'


export default function App(){
    return (
        <>
            <Joke
                setup="Why don't skeletons fight each other?"
                punch="They don't have the guts."
            />
            <Joke
                setup="What do you call fake spaghetti?"
                punch="An impasta."
            />
            <Joke
                setup="Why did the scarecrow win an award?"
                punch="Because he was outstanding in his field."
            />
            <Joke
                setup="Did you hear about the claustrophobic astronaut?" 
                punch="He just needed a little space."
            />
            <Joke
                setup="How does a penguin build its house?"
                punch="Igloos it together."
            />
        </>
    )
}