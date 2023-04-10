/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeTab, setActiveTab] = useState('Homez');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === 'Homez') {
      setActiveTab('Home');
    } else if (location.pathname === 'Add') {
      setActiveTab('Add');
    } else if (location.pathname === 'Aboutz') {
      setActiveTab('About');
    }
  }, [location]);
  return (
    <div className="header">
      <p className="logo">Admin Management System</p>
      <div className="header-right">
        <Link to="/homez">
          <p
            className={`${activeTab === 'Homez' ? 'active' : ''}`}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === 'Add' ? 'active' : ''}`}
            onClick={() => setActiveTab('Add')}
          >
            Add
          </p>
        </Link>
        <Link to="/aboutz">
          <p
            className={`${activeTab === 'Aboutz' ? 'active' : ''}`}
            onClick={() => setActiveTab('Aboutz')}
          >
            About
          </p>
        </Link>
        <Link to="/dashboard">
          <p
            className={`${activeTab === 'Aboutz' ? 'active' : ''}`}
            onClick={() => setActiveTab('Aboutz')}
          >
            Dashboard
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
