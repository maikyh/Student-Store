import React, { useState } from "react";
import "./Categories.css";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"];

  return (
    <div className="container">
      <div className="row justify-content-center mt-4 mb-4">
        {categories.map((category, index) => (
          <div className="col-auto" key={index}>
            <button
              className={`btn btn-outline-success me-3 ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      <div className="row mb-4">
        <div className="col text-center">
          <h3>{selectedCategory}</h3>
          {/* Add your content for the selected category */}
        </div>
      </div>
    </div>
  );
}
