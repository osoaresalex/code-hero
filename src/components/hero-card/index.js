import React from 'react';
import './hero-card.css';

import ironman from '../../resources/ironman.jpg';

function HeroCard({image, name}) {
  const styles = {
    background: `url("${image}") center center no-repeat`,
    backgroundSize: 'cover',
  };

  return (
    <div className="hero-card">
      <div className="hero-card__image" style={styles}/>
      <span className="hero-card__name color-black roboto-regular">{name}</span>
    </div>
  );
}

HeroCard.defaultProps = {
  image: ironman,
  name: 'Tony Stark'
};

export default HeroCard;
