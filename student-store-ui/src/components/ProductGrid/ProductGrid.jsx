import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const url = `https://codepath-store-api.herokuapp.com/store`;

export default function ProductGrid({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let currentProducts;
  if (selectedCategory !== "All Categories") {
    currentProducts = products.filter((item) => item.category === selectedCategory);
  } else {
    currentProducts = products;
  }

  return (
    <div className="mx-auto product-grid">
      <div className="row">
        {currentProducts?.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
