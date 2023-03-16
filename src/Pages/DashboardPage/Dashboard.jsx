import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div className="dash">
      <h1 className="head">WELCOME TO YOUR DASHBOARD</h1>
      <p className="head">
        {user?.first_name} {user?.last_name}
      </p>
    </div>
  );
}

export default Dashboard;
