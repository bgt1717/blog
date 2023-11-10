// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./MobileMenu.css";

const MobileMenu = ({ handleClose }) => {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu">
        <Link className="linkm" to="/" onClick={handleClose}>
          HOME
        </Link>
        <Link className="linkm" to="/about" onClick={handleClose}>
          ABOUT
        </Link>
        <Link className="linkm" to="/write" onClick={handleClose}>
          WRITE
        </Link>
        <Link className="linkm" to="/" onClick={handleClose}>
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

