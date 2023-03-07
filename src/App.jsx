import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegistrationPage/Register';
import Dashboard from './Pages/DashboardPage/Dashboard';
import Hompage from './Pages/HomePage/Hompage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Hompage />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
