import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearchQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchQueryChange(query);
  };

  const handleClearInput = () => {
    setSearchQuery("");
    onSearchQueryChange("");
  };

  return (
    <div className="search">
      <div className='content'>
        <div className="row">
          <div className="col-md-6">
            <div className="mx-auto search mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleSearch}
                value={searchQuery}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <button className="btn btn-success" type="button" onClick={handleClearInput}>
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
