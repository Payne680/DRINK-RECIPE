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
import Ingredients from './Pages/DashboardPage/Ingredients/Ingredients';
import Glasses from './Pages/DashboardPage/Glasses/Glasses';
import Drinks from './Pages/DashboardPage/Drinks/Drinks';
import Categories from './Pages/DashboardPage/Categories/Categories';

function App() {
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
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="/Glasses" element={<Glasses />} />
          <Route path="/Ingredients" element={<Ingredients />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
