/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';
import AuthGuard from '../../Components/AuthGuard';

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    window.location.reload(true);
  };

  return (
    <div className="dash">
      <div>
        <div className="sidebarz">
          <header>User Panel</header>
          <ul>
            <li>
              <Link to="/Drinks">Drinks</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
              <Link to="/Ingredients">Ingredients</Link>
            </li>
            <li>
              <Link to="/Glasses">Glasses</Link>
            </li>
            <li>
              <Link to="/edith-profile">Edith Profile</Link>
            </li>
            <li>
              <a href="jin">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/api-docs/">Documentation</a>
            </li>
            <li>
              <button className="logoutz" type="button" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="head">WELCOME TO YOUR DASHBOARD</h1>
        <p className="head">
          {user?.first_name} {user?.last_name}
        </p>
      </div>
    </div>
  );
}

export default AuthGuard(Dashboard);
