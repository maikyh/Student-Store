import React, { useState } from "react";
import { Link } from "react-router-dom";

export function ProductCard({ product, onSetCounter, onProductAdded, onClick, onClose, largeView}) {
  const handleClick = () => {
    if (onClick) {
      onClick(product.id);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    onProductAdded();
    setCounter(counter + 1);
    onSetCounter(counter + 1);
  }

  const removeToCart = () => {
    if(counter > 0){
      onProductAdded();
      setCounter(counter - 1);
      onSetCounter(counter - 1);
    }
  }

  console.log(product);

  return (
    <div className="card bg-white rounded-lg shadow-md mb-4">
      <img
        onClick={handleClick}
        className="card-img-top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="product-name card-title text-lg font-semibold text-gray-900">
          {product.name}
        </h5>
        {largeView && <div className="d-flex justify-content-between align-items-center mt-2.5">
          <span className="product-price text-lg font-weight-bold text-gray-900">
            {product.description}
          </span>
        </div>}
        <div className="d-flex justify-content-between align-items-center mt-2.5">
          <span className="product-price text-lg font-weight-bold text-gray-900">
            ${product.price}
          </span>
        </div>
      </div>
      {largeView && (
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-success" onClick={handleClose}>
            Back
          </button>
        </div>
      )}
      <button onClick={addToCart}>+</button>
      <button onClick={removeToCart}>-</button>
      {counter > 0 && <p>{counter}</p> }

    </div>
  );
}

export default ProductCard;


