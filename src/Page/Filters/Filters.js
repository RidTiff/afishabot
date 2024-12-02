import React, { useState } from 'react';
import './Filters.css'

function Filters({ onFilterChange }) {
  const [textFilter, setTextFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [museums, setMuseums] = useState([]);

  const handleMuseumChange = (event) => {
    const { value, checked } = event.target;
    setMuseums((prev) =>
      checked ? [...prev, value] : prev.filter((museum) => museum !== value)
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      textFilter,
      startDate,
      endDate,
      museums,
    });
  };

  const handleResetFilters = () => {
    setTextFilter('');
    setStartDate('');
    setEndDate('');
    setMuseums([]);
  };

  return (
    <div className="filters-popup">
        <h2 className="filters-popup__title">Настройте поиск</h2>
        <div className="filters-popup__filter">
            <label className="filters-popup__label">Описание:</label>
            <input
                type="text"
                className="filters-popup__input"
                value={textFilter}
                onChange={(e) => setTextFilter(e.target.value)}
                placeholder="Введите ключевые слова"
            />
        </div>
        <div className="filters-popup__filter">
            <label className="filters-popup__label">Дата начала:</label>
            <input
                type="date"
                className="filters-popup__input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
        </div>
        <div className="filters-popup__filter">
            <label className="filters-popup__label">Дата завершения:</label>
            <input
                type="date"
                className="filters-popup__input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
        <div className="filters-popup__filter">
            <label className="filters-popup__label">Выберите музей:</label>
            <div className="filters-popup__checkbox-container">
                <label className="filters-popup__checkbox-label">
                    <input
                        type="checkbox"
                        className="filters-popup__checkbox"
                        value="Остафьево"
                        checked={museums.includes('Остафьево')}
                        onChange={handleMuseumChange}
                    />
                    Остафьево
                </label>
                <label className="filters-popup__checkbox-label">
                    <input
                        type="checkbox"
                        className="filters-popup__checkbox"
                        value="Лаврушинский"
                        checked={museums.includes('Лаврушинский')}
                        onChange={handleMuseumChange}
                    />
                    Лаврушинский
                </label>
            </div>
        </div>
        <div className="filters-popup__buttons">
            <button
                className="filters-popup__button filters-popup__button--apply"
                onClick={handleApplyFilters}
            >
                Применить
            </button>
            <button
                className="filters-popup__button filters-popup__button--reset"
                onClick={handleResetFilters}
            >
                Сбросить
            </button>
        </div>
    </div>

  );
}

export default Filters;
