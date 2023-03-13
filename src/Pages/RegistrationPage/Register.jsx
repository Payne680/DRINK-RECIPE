import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';
import NavBar from '../NavBar/NavBar';
import './Register.css';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      first_name: target.first_name.value,
      last_name: target.last_name.value,
      email_address: target.email_address.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };
    setIsLoading(true);
    if (target.password.value === target.passwordConfirmation.value) {
      await register(data);
      setIsLoading(false);
      navigate('/login');
    } else {
      setError('Passwords do not match');
    }
  };
  return (
    <div className="formz">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h1> Create An Account</h1>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          required
        />
        <input type="text" placeholder="Last Name" name="last_name" required />
        <input
          type="email"
          placeholder="Email Address"
          name="email_address"
          required
        />
        <input type="phone" placeholder="Phone Number" name="phone" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          name="passwordConfirmation"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Account</button>
        <p>
          Have an account?
          <Link className="linkz" to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}
