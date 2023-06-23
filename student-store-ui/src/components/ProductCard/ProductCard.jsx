import React, { useState } from "react";
import "./ProductCard.css";

export function ProductCard({shoppingCart, handleRemoveItemToCart, handleAddItemToCart, product, onSetCounter, onProductAdded, onClick, onClose, largeView}) {
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
    handleAddItemToCart(product.id);
    setCounter(shoppingCart[product.id]  + 1);
    onSetCounter(shoppingCart[product.id]  + 1);
  }

  const removeToCart = () => {
    if(shoppingCart[product.id]  > 0){
      onProductAdded();
      handleRemoveItemToCart(product.id);
      setCounter(shoppingCart[product.id]  - 1);
      onSetCounter(shoppingCart[product.id]  - 1);
    }
  }

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
            ${product.price.toFixed(2)}
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

      {!largeView && (
        <div className="d-flex justify-content-between align-items-center cart-section">
          <div>
            <button className="btn btn-primary cart-button" onClick={addToCart}>
              +
            </button>
            <button className="btn btn-danger cart-button" onClick={removeToCart}>
              -
            </button>
          </div>
          {shoppingCart[product.id] > 0 && (
            <p className="cart-item-count">{shoppingCart[product.id]}</p>
          )}
        </div>
      )}

    </div>
  );
}

export default ProductCard;


