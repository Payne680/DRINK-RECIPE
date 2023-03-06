import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <>
      <h1>Dashboard Page</h1>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
    </>
  );
}

export default Dashboard;
