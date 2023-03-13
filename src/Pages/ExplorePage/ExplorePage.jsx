/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './ExplorePage.css';

function Explore() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fa fa-bars" id="btn" />
        <i className="fa fa-times" id="cancel" />
      </label>
      <div className="sidebar">
        <header>Categories</header>
        <ul>
          <li>
            <a href="whiskey">
              <i className="fa-solid fa-whiskey-glass-ice" /> Whiskey
            </a>
          </li>
          <li>
            <a href="champagne">Champagne</a>
          </li>
          <li>
            <a href="jin">Jin</a>
          </li>
          <li>
            <a href="coke">Cocktail</a>
          </li>
          <li>
            <a href="beer">
              <i className="fa-duotone fa-beer-mug" /> Beer
            </a>
          </li>
          <div className="homez">
            <Link to="/">Home</Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Explore;
