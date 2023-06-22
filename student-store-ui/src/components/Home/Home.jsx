import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <Hero />
      <Search onSearchQueryChange={handleSearchQueryChange} />
      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductGrid selectedCategory={selectedCategory} searchQuery={searchQuery} />
      <About />
      <Contact />
    </div>
  );
}
