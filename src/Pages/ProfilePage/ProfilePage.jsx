/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import AuthGuard from '../../Components/AuthGuard';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import './ProfilePage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateCurrentUser } from '../../api/auth';

function Profile({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      id: user.id,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
    };
    setIsLoading(true);
    await updateCurrentUser(data);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    window.location.reload(true);
  };

  return (
    <div className="profile">
      <h1 className="headz">My Profile</h1>

      <form className="profils" onSubmit={handleUpdate}>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <div className="profileInfo">
          <div className="profile_page_info">
            <div id="image">
              <div className="image" title="change profile picture">
                <FaUserCircle className="userIcon" />
                <FaEdit className="userIcon1" />
              </div>
            </div>
            <div className="signupCard">
              <h2>First Name</h2>
              <input
                className="edith-prof"
                type="text"
                placeholder="update your name"
                defaultValue={user?.first_name}
                name="firstName"
              />
            </div>
            <div className="signupCard">
              <h2>Last Name</h2>
              <input
                className="edith-prof"
                type="text"
                placeholder="update your last name"
                defaultValue={user?.last_name}
                name="lastName"
              />
            </div>
            <div className="signupCard">
              <h2>Email</h2>
              <input
                className="edith-prof"
                type="text"
                placeholder="update your email"
                value={user?.email_address}
                disabled
              />
            </div>
            <div className="signupCard">
              <h2>Phone number</h2>
              <input
                className="edith-prof"
                type="text"
                placeholder="update your phone number"
                defaultValue={user?.phone}
                name="phone"
              />
            </div>
            <div className="signupCard">
              <h2>api-key</h2>
              <input
                className="edith-prof"
                type="text"
                placeholder="update your phone number"
                defaultValue={user?.apiKey}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="btnz" type="submit">
            Update
          </button>
          <button className="btnz" type="button" onClick={logout}>
            logout
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthGuard(Profile);
