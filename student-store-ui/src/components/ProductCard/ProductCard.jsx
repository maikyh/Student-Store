import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  const { id, name, price, description, image } = product;

  const formattedPrice = `$${price.toFixed(2)}`;

  const handleAddToCart = () => {
    handleAddItemToCart(id);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemToCart(id);
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">{formattedPrice}</div>
      {showDescription && (
        <div className="product-description">{description}</div>
      )}
      <div className="product-quantity">{quantity > 0 && quantity}</div>
      <div>
        <button className="add" onClick={handleAddToCart}>
          Add
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
}
