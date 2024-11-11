import React, { useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
import cards_data from '../../../assets/cards/Cards_data';  // Import cards_data

const TitleCards = ({ title, category }) => {
  
  const [apiData, setApiData] = useState(cards_data);  // Set the state to use cards_data directly
  const cardsRef = useRef();

  // Handle horizontal scrolling
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

 
  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Cringeflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${index}`} className="card" key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
