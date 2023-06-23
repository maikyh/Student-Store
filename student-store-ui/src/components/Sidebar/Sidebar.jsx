import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({products, shoppingCart}) {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const options = [];
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 1; i <= 16; i++) {
    if(shoppingCart[i]>0){
      subTotal += products[i-1].price * shoppingCart[i];
      options.push( 
        <div>
          {products[i-1].name} {shoppingCart[i]} {products[i-1].price} {products[i-1].price * shoppingCart[i]}
        </div>
      );
    }
  }

  if(subTotal > 0) {
    tax = subTotal * .0875;
    total = subTotal + tax;

    options.push( <div>{subTotal.toFixed(2)}</div> );
    options.push( <div>{tax.toFixed(2)}</div> );
    options.push( <div>{total.toFixed(2)}</div> );
  }

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleButtonClick}>
        Expand
      </button>
      <div>
        {expanded && options}
      </div>
    </div>
  );
};

export default Sidebar;
