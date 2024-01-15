import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CardData from './carData'
import Card from './components/Card/Card'
import './styles.css'

function App() {
  const arrayOfCards = CardData.map(cardItem =>(
    <Card 
      img={cardItem.coverImg}
      rating={cardItem.stats.rating}
      reviewCount={cardItem.stats.reviewCount}
      location={cardItem.location}
      subtitle={cardItem.title}
      price={cardItem.price}
      spotsAvailable={cardItem.openSpots}
    />
  ));
  return (
    <>
    <Header/>
    <Hero/>
    <div className='cards-container'>
      {arrayOfCards}      
    </div>
    </>
  );
}

export default App;




