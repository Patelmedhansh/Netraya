import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import PopupForm from './PopupForm';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <div className="logo">netraya.</div>
      
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#articles">Articles</a></li>
        </ul>
      </nav>
      
      <div className="auth-buttons">
        {isLoggedIn && (
          <button onClick={handleLogout} className="contact-btn">Logout</button>
        )}
        <button onClick={() => setShowContactForm(true)} className="contact-btn">Contact Us</button>
      </div>

      <PopupForm 
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        type="contact"
      />
    </header>
  );
};

export default Header;