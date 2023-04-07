import React from 'react';
import { Link } from 'react-router-dom';
import './Drinks.css';

function Drinks() {
  return (
    <div className="cardz">
      <div className="cardi">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>Drinks</h5>
        <Link to="/dashboard">
          <button className="btnzs" type="button">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Drinks;
