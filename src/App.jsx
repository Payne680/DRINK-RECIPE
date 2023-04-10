/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
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
import About from './Pages/DashboardPage/CRUD/About';
import View from './Pages/DashboardPage/CRUD/View';
import AddEdith from './Pages/DashboardPage/CRUD/AddEdit';
import Home from './Pages/DashboardPage/CRUD/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="top-center" />
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
          <Route path="/homez" element={<Home />} />
          <Route path="/add" element={<AddEdith />} />
          <Route path="/update/:id" element={<AddEdith />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/aboutz" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
