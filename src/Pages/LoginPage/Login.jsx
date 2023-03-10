/* eslint-disable no-shadow */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
import NavBar from '../NavBar/NavBar';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      email_address: target.email_address.value,
      password: target.password.value,
    };

    setIsLoading(true);
    setError('');
    try {
      const { data } = await login(user.email_address, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h1> Login Your Account</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email Address"
          name="email_address"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <p>
          Do not have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
