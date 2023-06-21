import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"

export default function Home() {
  return (
    <div className="home">
      <Hero/>
      <ProductGrid/>
      <About/>
    </div>
  )
}
