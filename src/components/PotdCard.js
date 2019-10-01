import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: lightgrey;
  border-radius: 15px;
`;

const StyledCardHeading = styled.h1`
  font-size: 50px;
  margin-bottom: 5px;
`;

const StyledP = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
`;

function PotdCard(props) {
  return (
    <StyledCardContainer>
      <StyledCardHeading>{props.title}</StyledCardHeading>

      <div className="date">
        <StyledP>{props.date}</StyledP>
      </div>

      <div className="img-container">
        <img className="img" alt="space" src={props.picture}></img>
      </div>
      <StyledP>{props.description}</StyledP>
    </StyledCardContainer>
  );
}

export default PotdCard;
