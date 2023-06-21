import React from 'react';
import './Search.css';

const Search = () => {
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
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <button className="btn btn-success" type="button">
              My Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
