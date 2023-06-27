import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({ products, shoppingCart }) {
  const [expanded, setExpanded] = useState(false);
  const [checkout, setCheckout] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [statusOfPayment, setStatusOfPayment] = useState(false);

  const handleSetSearchName = (event) => {
    const query = event.target.value;
    if(statusOfPayment === false) setSearchName(query);
  };

  const handleSetSearchEmail = (event) => {
    const query = event.target.value;
    if(statusOfPayment === false) setSearchEmail(query);
  };

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

  const handleSetCheckout = (event) => {
    event.preventDefault();
    setCheckout({searchName, searchEmail, tableRows});
    setStatusOfPayment(true);
  };

  const handleExit = (event) => {
    event.preventDefault();
    setCheckout(null);
    setStatusOfPayment(false);
    setSearchName("");
    setSearchEmail("");
  }

  console.log(statusOfPayment)

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button btn btn-success" onClick={handleButtonClick}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      {expanded && (
        <div className="table-container">
          <h1 className='text-center text-white mt-1'>Shopping Cart</h1>
          
          {
            tableRows.length > 1 && 
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
          }
          {
            tableRows.length <= 1 && 
            <p className='mt-3 text-center text-white'>No items added to cart yet. Start shopping now!</p>
          }

          <h1 className='text-center text-white mt-1'>Payment Info</h1>
          <form action="">
            <div class="form-group text-white">
              <label for="name">Name</label>
              <input value={searchName} onChange={handleSetSearchName} type="text" class="form-control" id="name" placeholder="User Name"/>
            </div>
            <div class="form-group text-white mt-1">
              <label for="email">Email</label>
              <input value={searchEmail} onChange={handleSetSearchEmail} type="email" class="form-control" id="email" placeholder="user@meta.com"/>
            </div>
            <div class="">
              <button onClick={handleSetCheckout} type="submit" class="btn btn-outline-success mt-3 text-white border-white">Checkout</button>
            </div>
          </form>
          <h1 className='text-center text-white mt-1'>Checkout Info</h1>

          {
            statusOfPayment && 
            <div>
              <h4 className='text-white'>Receipt</h4>
              <p className='text-white'>Showing receipt for {searchName} available at {searchEmail}:</p>
              <button onClick={handleExit} type="submit" class="btn btn-outline-success mt-3 text-white border-white">Exit</button>
            </div>
          }
          {
            !statusOfPayment &&
            <p className='text-white'>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
          }
        </div>
      )}
    </div>
  );
}

export default Sidebar;
