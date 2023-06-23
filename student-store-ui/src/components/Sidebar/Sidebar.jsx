import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({ products, shoppingCart }) {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const tableRows = [];
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 1; i <= 16; i++) {
    if (shoppingCart[i] > 0) {
      const product = products[i - 1];
      const quantity = shoppingCart[i];
      const itemSubtotal = product.price * quantity;
      subTotal += itemSubtotal;

      tableRows.push(
        <tr key={i}>
          <td>{product.name}</td>
          <td>{quantity}</td>
          <td>${product.price.toFixed(2)}</td>
          <td>${itemSubtotal.toFixed(2)}</td>
        </tr>
      );
    }
  }

  if (subTotal > 0) {
    tax = subTotal * 0.0875;
    total = subTotal + tax;

    tableRows.push(
      <tr key="subtotal">
        <td colSpan="3">Subtotal</td>
        <td>${subTotal.toFixed(2)}</td>
      </tr>
    );
    tableRows.push(
      <tr key="tax">
        <td colSpan="3">Tax</td>
        <td>${tax.toFixed(2)}</td>
      </tr>
    );
    tableRows.push(
      <tr key="total">
        <td colSpan="3">Total</td>
        <td>${total.toFixed(2)}</td>
      </tr>
    );
  }

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button btn btn-success" onClick={handleButtonClick}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      {expanded && (
        <div className="table-container">
        <table className="table table-striped mt-3">
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
        </div>
      )}
    </div>
  );
}

export default Sidebar;
