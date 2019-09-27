import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PotdCard from './PotdCard';

function Card(props) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(resp => {
        const card = resp.data;
        console.log(card);
        setCard(card);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="data">
        <PotdCard
          title={card.title}
          picture={card.url}
          date={card.date}
          description={card.explanation}
        />
      </div>
    </div>
  );
}

export default Card;
