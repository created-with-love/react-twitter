import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => (
  <input
    type="text"
    className="form-control search-input"
    placeholder="Поиск по записям"
  />
);

export default SearchPanel;
