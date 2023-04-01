import React from 'react';
import { Link } from 'react-router-dom';

function Ingredients() {
  return (
    <div className="cardz">
      <Link to="/dashboard">
        <button className="btnzs" type="button">
          Back to home
        </button>
      </Link>
      <div className="cardi">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>Ingredients</h5>
      </div>
      <div className="cardi">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>Ingredients</h5>
      </div>
      <div className="cardi">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>Ingredients</h5>
      </div>
    </div>
  );
}

export default Ingredients;
