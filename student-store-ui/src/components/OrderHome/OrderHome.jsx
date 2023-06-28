import React, { useState } from "react";
import "./OrderHome.css";
import Hero from "../Hero/Hero";
import OrderGrid from "../OrderGrid/OrderGrid"; 
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
      <OrderGrid/>
      <About />
      <Contact />
    </div>
  );
}
