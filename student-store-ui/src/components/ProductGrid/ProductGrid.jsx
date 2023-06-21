import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import dataProducts from "../../../../student-store-express-api/data/db.json";
import "./ProductGrid.css";

const products = dataProducts.products;

export default function ProductGrid({ selectedCategory }) {
  console.log(selectedCategory);
  return (
    <div className="mx-auto product-grid">
      <div className="row">
        {products?.map((product) => (
          <div className="col-md-3" >
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}