import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home() {
  return (
    <div className="home">
      <Hero/>
      <Search/>
      <Categories/>
      <ProductGrid/>
      <About/>
      <Contact/>
    </div>
  )
}
