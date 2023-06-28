import React, { useState } from "react";
import "./OrderCard.css";

export function ProductCard({id, email, total}) {
  return (
    <div className="m-4">
        <h6>Recept #{id}</h6>
        <p>{email}</p>
        <p>{total}</p>
    </div>
  );
}

export default ProductCard;


