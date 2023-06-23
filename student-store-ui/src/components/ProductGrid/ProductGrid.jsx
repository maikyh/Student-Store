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
  const [currentProductId, setCurrentProductId] = useState(null);
  const [counter, setCounter] = useState(null);
  const [shoppingCart, setShoppingCart] = useState({});

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
    setCurrentProductId(currentProductAdded.id);
  };

  const handleSetCounter = (count) => {
    setCounter(count);
  };

  console.log(currentProducts[0]);

  const handleAddItemToCart = (productId) => {
    setShoppingCart((prev) => {
      const newCart = { ...prev };
      console.log(productId);
      if (newCart[productId] === undefined) {
        newCart[productId] = 1;
      } else {
        newCart[productId] = newCart[productId] + 1;
      }
      console.log("New cart: ", newCart);
      return newCart;
    });
  };

  const handleRemoveItemToCart = (productId) => {
    setShoppingCart((prev) => {
      const newCart = { ...prev };
      console.log(productId);
      if (newCart[productId] !== undefined) {
        newCart[productId] = newCart[productId] - 1;
      }
      console.log("New cart: ", newCart);
      return newCart;
    });
  };

  return (
    <div>
      <Sidebar products={products} shoppingCart={shoppingCart}/>
      <div className="container product-grid">
        {!selectedProductId && (
          <div className="row justify-content-start">
            {currentProducts?.map((product) => (
              <div className="col-md-3" key={product.id}>
                <ProductCard handleRemoveItemToCart={handleRemoveItemToCart} handleAddItemToCart={handleAddItemToCart} product={product} onSetCounter={handleSetCounter} onProductAdded={() => handleSetProductedAdded(product)} onClick={() => handleProductClick(product.id)} />
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
