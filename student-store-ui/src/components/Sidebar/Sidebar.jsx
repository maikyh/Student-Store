import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({ handleClearShoppingCart, products, shoppingCart }) {
  const [expanded, setExpanded] = useState(false);
  const [checkout, setCheckout] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [statusOfPayment, setStatusOfPayment] = useState(false);
  const [checkoutAPI, setCheckoutAPI] = useState({
    shoppingCart: [],
    user: []
  });

  const handleSetSearchName = (event) => {
    const query = event.target.value;
    setSearchName(query);
  };

  const handleSetSearchEmail = (event) => {
    const query = event.target.value;
    setSearchEmail(query);
  };

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const tableRows = [];
  const productsOnShoppingCart = [];
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 1; i <= 16; i++) {
    if (shoppingCart[i] > 0) {
      const product = products[i - 1];
      const quantity = shoppingCart[i];
      const itemSubtotal = product.price * quantity;
      subTotal += itemSubtotal;
      
      productsOnShoppingCart.push([product.id,quantity,product.name,product.price,itemSubtotal]);

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

  const handleSetCheckout = async (event) => {
    event.preventDefault();
    if(productsOnShoppingCart.length > 0 && searchName.length > 0 && searchEmail.length > 0){
      const updatedCheckoutAPI = {
        shoppingCart: productsOnShoppingCart.map(([id, quantity]) => ({
          itemId: id,
          quantity: quantity
        })),
        user: {
          name: searchName,
          email: searchEmail
        }
      };
  
      setCheckoutAPI(updatedCheckoutAPI);
      
      try {
        const response = await fetch('http://localhost:3001/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedCheckoutAPI)
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
      
      setCheckout({searchName, searchEmail, productsOnShoppingCart});
      setStatusOfPayment(true);
      handleClearShoppingCart();
      setSearchName("");
      setSearchEmail("");
    }
  };

  const handleExit = (event) => {
    event.preventDefault();
    setCheckout(null);
    setStatusOfPayment(false);
  }

  console.log(checkoutAPI)

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
              <p className='text-white mb-1'>Showing receipt for {checkout.searchName} available at {checkout.searchEmail}:</p>
              {checkout.productsOnShoppingCart?.map((product) => (
                <ul className="m-0">
                  <li className='text-white'> {product[1]} {product[2]} purchased at a cost of ${product[3]} for a total cost of ${product[4]}.</li>
                </ul>
              ))}
              <button onClick={handleExit} type="submit" class="btn btn-outline-success mt-3 mb-3 text-white border-white">Continue</button>
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
