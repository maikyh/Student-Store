import React from "react";
import "./Categories.css";

export default function Categories({ selectedCategory, onCategoryChange }) {
    const categories = ["All Categories", "clothing", "food", "accessories", "tech", "Most Expensive"];
  
    const handleCategoryClick = (category) => {
      onCategoryChange(category);
    };
  
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    const displayCategory = capitalizeFirstLetter(selectedCategory);

    return (
      <div className="container">
        <div className="row justify-content-center mt-4 mb-4">
          {categories.map((category, index) => (
            <div className="col-auto" key={index}>
              { category !== "Most Expensive" &&
                <button
                  className={`btn btn-outline-success me-3 ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {capitalizeFirstLetter(category)}
                </button>
              }
              { category === "Most Expensive" &&
                <button
                  className={`btn btn-outline-warning me-3 ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {capitalizeFirstLetter(category)}
                </button>
              }
            </div>
          ))}
        </div>
        <div className="row mb-4">
          <div className="col text-center">
            <h3>{capitalizeFirstLetter(selectedCategory)}</h3>
          </div>
        </div>
      </div>
    );
  }
  