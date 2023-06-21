import * as React from "react"
import "./Home.css"
import { useState } from "react"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home">
      <Hero />
      <Search />
      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <About />
      <Contact />
    </div>
  );
}
