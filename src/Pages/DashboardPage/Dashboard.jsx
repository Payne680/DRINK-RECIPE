/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <>
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
        </ul>
      </div>
      <p>
        {user?.first_name} {user?.last_name}
      </p>
    </>
  );
}

export default Dashboard;
