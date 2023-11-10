// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ handleClose }) => {
  return (
    <div>
      <Link className="link" to="/" onClick={handleClose}>
        HOME
      </Link>
      <Link className="link" to="/about" onClick={handleClose}>
        ABOUT
      </Link>
      <Link className="link" to="/write" onClick={handleClose}>
        WRITE
      </Link>
      <Link className="link" to="/" onClick={handleClose}>
        LOGOUT
      </Link>
    </div>
  );
};

export default MobileMenu;
