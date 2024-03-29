// TopBar.js
import React, { useState } from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import MobileMenu from './MobileMenu';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blogbackend-6zuh.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
      <Link className="link" to="/">
              The Austin Travel Blog
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePicture} alt="" />
          </Link>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}

        {/* Hamburger menu icon */}
        <i className="mobileMenuIcon fa-solid fa-bars" onClick={toggleMobileMenu}></i>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <MobileMenu handleClose={toggleMobileMenu} />}

        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
}

