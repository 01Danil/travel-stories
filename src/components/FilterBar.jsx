import React, { useState, useEffect, useRef } from "react";
import "./FilterBar.css";

const FilterBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const filterBarRef = useRef(null); // Реф для отслеживания кликов вне компонента

  // Пример массива городов
  const cities = [
    "Dublin",
    "Cork",
    "Galway",
    "Limerick",
    "Waterford",
    "Kilkenny",
    "Dundalk",
    "Sligo",
    "Wexford",
    "Letterkenny",
    "Tullamore",
    "Tralee",
    "Ennis",
    "Athlone",
    "Carlow",
    "Cavan",
    "Clonmel",
    "Mullingar",
    "Naas",
    "Portlaoise",
    "Drogheda",
    "Tipp Town",
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
    setShowSuggestions(true);
  };

  const handleCitySelect = (city) => {
    setSearchQuery(city);
    onSearch(city);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleClickOutside = (event) => {
    if (filterBarRef.current && !filterBarRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    onSearch(""); // Сброс фильтра
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-bar" ref={filterBarRef}>
      <div className="filter-bar-input-wrapper">
        <input
          type="text"
          placeholder="Search or select a city"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={handleFocus}
          className="filter-bar-input"
        />
        {searchQuery && (
          <button
            className="filter-bar-clear-btn"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
      </div>
      {showSuggestions && (
        <ul className="filter-bar-suggestions">
          {cities.map((city, index) => (
            <li
              key={index}
              className="filter-bar-suggestion"
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterBar;
