import React from 'react';
import { Link } from 'react-router-dom';

function Glasses() {
  return (
    <div className="cardz">
      <Link to="/dashboard">
        <button className="btnzs" type="button">
          Back to home
        </button>
      </Link>

      <div className="cards">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>glasses</h5>
      </div>
      <div className="cards">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>glasses</h5>
      </div>
      <div className="cards">
        {/* <img className="img" src={pancake} alt="pancake" /> */}
        <h5>glasses</h5>
      </div>
    </div>
  );
}

export default Glasses;
