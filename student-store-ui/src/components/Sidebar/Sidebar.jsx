import React, { useState } from 'react';
import './Sidebar.css';

export function Sidebar({name, price, quantity}) {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleButtonClick}>
        Expand
      </button>
      <div>
        {name}
      </div>
      <div>
        {quantity}
      </div>
      <div>
        {price}
      </div>
    </div>
  );
};

export default Sidebar;
