import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CardData from './carData'
import Card from './components/Card/Card'

function App() {
  const arrayOfCards = CardData.map(cardItem =>(
    <Card 
          img={cardItem.coverImg}
          rating={cardItem.stats.rating}
          reviewCount={cardItem.stats.reviewCount}
          location={cardItem.location}
          subtitle={cardItem.title}
          price={cardItem.price}
    />
  ));
  return (
    <>
    <Header/>
    <Hero/>
    {arrayOfCards}
    </>
  );
}

export default App;




