import React, { useEffect, useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import "./OrderGrid.css";

const url = `http://localhost:3001/orders`;

export default function ProductGrid({ searchQuery }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setOrders(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let currentOrders = orders;

  let selectedProductId = false;
  
  console.log(currentOrders);

  /*
  if (searchQuery) {
    currentOrders = currentOrders.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  */

  return (
    <div>
      <div className="container product-grid">
        {!selectedProductId && (
          <div className="row justify-content-start">
            {currentOrders?.map((order) => (
              <div className="col-md-3" key={order.id}>
                <OrderCard id={order.id} email={order.email} total={order.total} />
              </div>
            ))}
          </div>
        )}

        {selectedProductId && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <OrderCard
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
