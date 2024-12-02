import React from 'react';
import moment from 'moment';

function CardDetail({ card, onBack }) {
  return (
    <div className="container">
      <h3 className="name">{card.name}</h3>
      <img src={card.image} className="img" alt="Event" />
      <p className="date">
        {moment(card.begin).diff(moment(), 'days') > 0
          ? `Идёт с ${card.begin}, до ${card.end}`
          : moment(card.end).diff(moment(), 'days') > 0
          ? `Идёт сейчас, до ${card.end}`
          : 'Сейчас уже закрылась :('}
      </p>
      <p className="place">
        {`${card.expo.name}. Адрес - ${card.expo.address}`}
      </p>
      <p className="description">{card.description}</p>
      <button className="buttonBack" onClick={() => onBack(card)}>
        Назад
      </button>
    </div>
  );
}

export default CardDetail;
