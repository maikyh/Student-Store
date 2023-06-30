import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './OrderDetails.css';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

const urlStore = `http://localhost:3001/store`;
const urlOrders = `http://localhost:3001/orders`;

const OrderDetails = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await fetch(urlStore);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataOrder = async () => {
      try {
          const response = await fetch(urlOrders + `/${id}`);
          const data = await response.json();
          setOrder(data.product);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
    };
    fetchDataProducts();
    fetchDataOrder();
  }, []);

  console.log(order);

  const tableRows = [];
  if(order.order){
    let subTotal = 0;
    let tax = 0;
    let total = 0;

    order.order.forEach((item) => {
      const product = products[item.itemId-1];
      const quantity = item.quantity;
      const itemSubtotal = product.price * quantity;
      subTotal += itemSubtotal;

      tableRows.push(
        <tr key={item.itemId}>
          <td>{product.name}</td>
          <td>{quantity}</td>
          <td>${product.price.toFixed(2)}</td>
          <td>${itemSubtotal.toFixed(2)}</td>
        </tr>
      );
    });
    
    tableRows.push(
      <div className='mt-1'></div>
    )

    if (subTotal > 0) {
      tax = subTotal * 0.0875;
      total = subTotal + tax;

      tableRows.push(
        <tr key="subtotal">
          <td className='fw-bold' colSpan="3">Subtotal</td>
          <td>${subTotal.toFixed(2)}</td>
        </tr>
      );
      tableRows.push(
        <tr key="tax">
          <td className='fw-bold' colSpan="3">Tax</td>
          <td>${tax.toFixed(2)}</td>
        </tr>
      );

      tableRows.push(
        <div className='mt-1'></div>
      )

      tableRows.push(
        <tr key="total">
          <td className='fw-bold' colSpan="3">Total</td>
          <td>${total.toFixed(2)}</td>
        </tr>
      );
    }
    
  }

  return (    
    <div className="">
      <Hero />
      {
        tableRows.length > 1 && 
        <div>
          <h2 className='text-center my-2' >Receipt #{id}</h2>
          <table className="table table-striped mt-3 container order-grid">
            <thead className="thead-dark">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
            </table>
            <div className="text-center">
              <Link to={`/orders`} className="btn btn-warning mt-0">
                Go Back
              </Link>
            </div>
        </div>
      }
      <About />
      <Contact />
    </div>
  );
  };
  

export default OrderDetails;
