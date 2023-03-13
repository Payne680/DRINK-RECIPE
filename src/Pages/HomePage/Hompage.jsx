/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <NavBar />
      <div className="welcome">
        <h1 className="title">Welcome To Whiskey Sour</h1>
        <p>"Just like wine, whiskey should also be able to breathe,"</p>
        <p>
          "A beautiful glass whiskey decanter is always a great gift for those
          <br />
          of us who want to see our whiskey open up without a label in the way."
        </p>
        <Link to="/register">
          <button className="btn" type="button">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="btn" type="button">
            Login
          </button>
        </Link>
      </div>
      <Link className="linkz" to="Explore">
        Explore for more details
      </Link>
    </div>
  );
}

export default HomePage;
