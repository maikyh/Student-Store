import React from "react";
import "./OrderCard.css";

export function ProductCard({ id, email, total }) {
  return (
    <div className="card mt-3 mb-1 border border-dark">
      <div className="card-body card-body text-center d-flex flex-column justify-content-center">
        <h6 className="card-title m-0">Receipt #{id}</h6>
        <div className="line mt-2 mb-1"></div>
        <p className="card-text m-0">{email}</p>
        <p className="card-text">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;