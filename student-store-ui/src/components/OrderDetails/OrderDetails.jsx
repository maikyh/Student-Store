import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './OrderDetails.css';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

const url = `http://localhost:3001/orders`;

const OrderDetails = () => {
    const { id } = useParams();
    
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

    const order = orders.find((order) => order.id === parseInt(id));
    console.log(order);

    return (    
      <div className="">
        <Hero />
        <h1>Order Details - ID: {id}</h1>
        <About />
        <Contact />
      </div>
    );
  };
  

export default OrderDetails;
