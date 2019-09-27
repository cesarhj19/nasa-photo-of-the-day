import React from 'react';

function PotdCard(props) {
  return (
    <div className="card-container" key={props.id}>
      <h1>{props.title}</h1>

      <div className="date">
        <p>{props.date}</p>
      </div>

      <div className="img-container">
        <img className="img" alt="space" src={props.picture}></img>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default PotdCard;
