import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductGrid.css";

const url = `https://codepath-store-api.herokuapp.com/store`;

export default function ProductGrid({ selectedCategory, searchQuery }) {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productAdded, setProductedAdded] = useState(null);
  const [costOfProductAdded, setCostOfProductedAdded] = useState(null);
  const [counter, setCounter] = useState(null);

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

  if (searchQuery) {
    currentProducts = currentProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleProductClose = () => {
    setSelectedProductId(null);
  };

  const handleSetProductedAdded = (currentProductAdded) => {
    setProductedAdded(currentProductAdded.name);
    setCostOfProductedAdded(currentProductAdded.price);
  };

  const handleSetCounter = (count) => {
    setCounter(count);
  };

  return (
    <div>
      <Sidebar name ={productAdded} price ={costOfProductAdded} quantity={counter}/>
      <div className="container product-grid">
        {!selectedProductId && (
          <div className="row justify-content-start">
            {currentProducts?.map((product) => (
              <div className="col-md-3" key={product.id}>
                <ProductCard product={product} onSetCounter={handleSetCounter} onProductAdded={() => handleSetProductedAdded(product)} onClick={() => handleProductClick(product.id)} />
              </div>
            ))}
          </div>
        )}

        {selectedProductId && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ProductCard
                product={products.find((product) => product.id === selectedProductId)}
                onClose={handleProductClose}
                largeView
                />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
