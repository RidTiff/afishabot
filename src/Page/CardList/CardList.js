import React from 'react';
import Card from '../Card/Card';
import moment from 'moment';

function CardList({ data, viewMode, onCardClick }) {
  return (
    <>
      {data.map((item, index) => (
        <Card
          className={viewMode}
          key={item.id}
          id={index}
          img={item.image}
          name={item.name}
          place={`${item.expo.name}${
            viewMode === 'single' ? `. Адрес - ${item.expo.address}` : ''
          }`}
          date={
            moment(item.begin).diff(moment(), 'days') > 0
              ? `Идёт с ${item.begin}, до ${item.end}`
              : moment(item.end).diff(moment(), 'days') > 0
              ? `Идёт сейчас, до ${item.end}`
              : 'Сейчас уже закрылась :('
          }
          src={item.src}
          onClick={() => onCardClick(item)}
        />
      ))}
    </>
  );
}

export default CardList;
