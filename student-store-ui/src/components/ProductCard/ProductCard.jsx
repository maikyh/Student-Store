import React from "react";
import { Link } from "react-router-dom";

export function ProductCard(product) {

  product = product.product;
  
  return (
    <div className="card bg-white rounded-lg shadow-md">
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <a href="#">
          <h5 className="product-name card-title text-lg font-semibold text-gray-900">
            {product.name}
          </h5>
        </a>
        <div className="d-flex justify-content-between align-items-center mt-2.5">
          <span className="product-price text-lg font-weight-bold text-gray-900">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
