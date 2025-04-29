import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'; // Changed Router to BrowserRouter
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyCookPage from './pages/MyCookPage';
import MealListPage from './pages/MealListPage';
import ReviewFormPage from './pages/ReviewFormPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>  {/* Changed Router to BrowserRouter */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/mycook">My COOK Page</Link>
                </li>
                <li>
                  <Link to="/select-meal">Select Meal</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route path="/register" element={<RegisterPage onRegister={login} />} />
          <Route path="/mycook" element={<PrivateRoute><MyCookPage /></PrivateRoute>} />
          <Route path="/select-meal" element={<PrivateRoute><MealListPage /></PrivateRoute>} />
          <Route path="/rate-meal" element={<PrivateRoute><ReviewFormPage /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>  {/* Changed Router to BrowserRouter */}
  );
}

export default App;