/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegistrationPage/Register';
import Dashboard from './Pages/DashboardPage/Dashboard';
import HomePage from './Pages/HomePage/Hompage';
import Explore from './Pages/ExplorePage/ExplorePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const BASE2_URL = 'http://localhost:8000/categories';
  const BASE_URL = 'http://localhost:8000/drinks';
  const API_KEY = '3';
  useEffect(() => {
    fetch(`${BASE_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData([...res]));
    fetch(`${BASE2_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData2([...res]));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/edith-profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
