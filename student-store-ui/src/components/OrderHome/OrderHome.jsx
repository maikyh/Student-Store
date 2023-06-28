import React, { useState } from "react";
import "./OrderHome.css";
import Hero from "../Hero/Hero";
import OrderGrid from "../OrderGrid/OrderGrid"; 
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <Hero />
      <OrderGrid searchQuery={searchQuery}/>
      <About />
      <Contact />
    </div>
  );
}
