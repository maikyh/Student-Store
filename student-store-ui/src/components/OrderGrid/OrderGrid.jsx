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

  let currentOrders = [...orders].sort((a, b) => b.id - a.id); // Sort by ID in descending order
  
  if (searchQuery) {
    currentOrders = currentOrders.filter((order) =>
      order.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  console.log(orders);

  return (
    <div>
      <div className="container order-grid">
          <div className="row justify-content-start">
            {currentOrders?.map((order) => (
              <div className="col-md-3" key={order.id}>
                <OrderCard id={order.id} email={order.email} total={order.total} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
