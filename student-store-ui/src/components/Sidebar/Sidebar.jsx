import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleButtonClick}>
        Expand
      </button>
    </div>
  );
};

export default Sidebar;
