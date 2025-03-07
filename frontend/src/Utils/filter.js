import React, { useState } from "react";
import "../Assets/styles/filter.css";
import productsData from "./productData";

const Filter = ({ filters, setFilters }) => {
  const [showColors, setShowColors] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);

  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ];
  const colors = [...new Set(productsData.map((product) => product.color))];
  const companies = [
    ...new Set(productsData.map((product) => product.company)),
  ];

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: e.target.value });
  };

  const handleCheckboxChange = (e, key) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedValues = checked
        ? [...prevFilters[key], value] // Add if checked
        : prevFilters[key].filter((item) => item !== value); // Remove if unchecked
      return { ...prevFilters, [key]: updatedValues };
    });
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      price: 1000,
      rating: "",
      color: [],
      company: [],
    });
    setShowColors(false);
    setShowCompanies(false);
  };

  return (
    <div className="filter-container">
      <h3>Filter Products</h3>

      <div className="filter-group">
        <label>Category</label>
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price (up to ₹{filters.price})</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.price}
          onChange={handlePriceChange}
        />
      </div>

      <div className="filter-group">
        <label>Rating</label>
        <select value={filters.rating} onChange={handleRatingChange}>
          <option value="">All</option>
          <option value="4">4 & above</option>
          <option value="3">3 & above</option>
          <option value="2">2 & above</option>
          <option value="1">1 & above</option>
        </select>
      </div>

      <div className="filter-group">
        <label
          className="toggle-label"
          onClick={() => setShowColors(!showColors)}
        >
          Colors {showColors ? "▲" : "▼"}
        </label>
        {showColors && (
          <div className="checkbox-group">
            {colors.map((color) => (
              <label key={color} className="checkbox-label">
                <input
                  type="checkbox"
                  value={color}
                  checked={filters.color.includes(color)}
                  onChange={(e) => handleCheckboxChange(e, "color")}
                />
                {color}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-group">
        <label
          className="toggle-label"
          onClick={() => setShowCompanies(!showCompanies)}
        >
          Companies {showCompanies ? "▲" : "▼"}
        </label>
        {showCompanies && (
          <div className="checkbox-group">
            {companies.map((company) => (
              <label key={company} className="checkbox-label">
                <input
                  type="checkbox"
                  value={company}
                  checked={filters.company.includes(company)}
                  onChange={(e) => handleCheckboxChange(e, "company")}
                />
                {company}
              </label>
            ))}
          </div>
        )}
      </div>

      <button className="clear-filters" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
