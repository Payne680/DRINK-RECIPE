/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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
      </div>
    </div>
  );
}

export default HomePage;
