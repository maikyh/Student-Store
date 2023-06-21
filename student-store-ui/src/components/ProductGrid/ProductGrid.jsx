import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import dataProducts from "../../../../student-store-express-api/data/db.json";
import "./ProductGrid.css";

const products = dataProducts.products;

export default function ProductGrid() {
  console.log(products);
  return (
    <div className="mx-auto product-grid">
      <div className="text-left mt-10 mb-20 text-uppercase font-semibold text-xl">
        <h3 className="fw-bold">Best Selling Products</h3>
      </div>
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
