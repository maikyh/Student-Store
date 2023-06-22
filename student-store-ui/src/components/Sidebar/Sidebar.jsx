import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({products, shoppingCart}) {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const options = [];
  for (let i = 1; i <= 16; i++) {
    if(shoppingCart[i]>0){
      options.push( 
        <div>
          {products[i-1].name} {shoppingCart[i]} {products[i-1].price} {products[i-1].price * shoppingCart[i]}
        </div>
      );
    }
  }

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleButtonClick}>
        Expand
      </button>
      <div>
        {options}
      </div>
    </div>
  );
};

export default Sidebar;
