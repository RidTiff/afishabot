import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Modal from '../Modal/Modal';
import CardList from '../CardList/CardList';
import CardDetail from '../CardDetail/CardDetail';
import brod from '../../img/brod.jpg'

function App() {
  const [toggleCard, setToggleCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [viewMode, setViewMode] = useState('single');
  const [dataOfEvent, setDataOfEvent] = useState([
    {
      id: 0,
      image: brod,
      name: 'Дворянское воспитание. Обычаи и традиции',
      expo: { name: 'Остафьево', address: "Лаврушинский пер., 10" },
      begin: "2024-05-31",
      end: "2024-11-17",
      date: 'Идёт сейчас, до: 24.11.2024',
      src: '#',
      description: "бла-бла-бла",
    }
  ]);
  const [filters, setFilters] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Загрузка данных при инициализации (без фильтров)
  useEffect(() => {
    fetch('https://gglp-fitr-afisha-api-0dc7.twc1.net/events/')
      .then((res) => res.json())
      .then((data) => setDataOfEvent(data))
      .catch((err) => console.error('Ошибка загрузки данных:', err));
  }, []);

  // Загрузка данных с учетом фильтров
  const fetchEvents = (filterParams) => {
    // Заглушка: пока что фильтры не работают на сервере
    console.log('Фильтры:', filterParams);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'single' ? 'double' : 'single'));
  };

  const handlerCardClick = (card) => {
    window.scrollTo(0, 0);
    setSelectedCard(card);
    setToggleCard(!toggleCard);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    fetchEvents(newFilters); // Вызов заглушки фильтров
    setIsFiltersOpen(false); // Закрыть окно после применения фильтров
  };

  const handleFavoritesClick = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <>
      <Header
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        toggleCard={toggleCard}
        onFavoritesClick={handleFavoritesClick}
        onFiltersClick={() => setIsFiltersOpen(true)}
      />
      <Modal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
        <Filters onFilterChange={handleFilterChange} />
      </Modal>
      <main className={`main ${!toggleCard ? viewMode : 'toggleCard'}`}>
        {!toggleCard ? (
          <CardList
            data={showFavorites ? dataOfEvent.filter((item) => favorites.includes(item.id)) : dataOfEvent}
            viewMode={viewMode}
            onCardClick={handlerCardClick}
            favorites={favorites}
          />
        ) : (
          <CardDetail card={selectedCard} onBack={handlerCardClick} />
        )}
      </main>
    </>
  );
}

export default App;
