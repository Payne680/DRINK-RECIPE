import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="cardz">
      <Link to="/dashboard">
        <button className="btnzs" type="button">
          Back to home
        </button>
      </Link>
      <div className="cardi">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>Categories</h5>
      </div>
    </div>
  );
}

export default Categories;
