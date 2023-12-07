import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Photo from './assets/image12.png'
import Rating from './assets/rating.svg'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Card
      img={Photo}
      ratingIcon={Rating}
      rating={"5.0"}
      revCount={6}
      country="USA"
      subtitle="Life lessons with Katie Zaferes"
      price={136}
      people="person"
    />

    </>
  );
}

export default App;




