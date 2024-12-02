import React from 'react';

function Header({ viewMode, toggleViewMode, toggleCard, onFavoritesClick, onFiltersClick }) {
  return (
    <header className="app-header">
      {!toggleCard && (
        <>
          <button className="toggleViewButton" onClick={toggleViewMode}>
            {viewMode === 'single' ? 'Две колонки' : 'Одна колонка'}
          </button>
          <button className="favorites-button" onClick={onFavoritesClick}></button>
          <button className="filters-button" onClick={onFiltersClick}></button>
        </>
      )}
    </header>
  );
}

export default Header;
