import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
  }
  return (
    <div className = "top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-linkedin"></i>
        {/* can add more icons from https://fontawesome.com/icons/ */}
        </div>
        <div className="topCenter">
            <ul className= "topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>
                {/* If there's not a user, no logout function. */} 
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <Link to ="/settings">
                    <img className = "topImg"
                    src={PF+user.profilePicture} 
                    alt = "" />
                    </Link>
                
                ) : (
                    <ul className="topList">
                        <li className="topListItem" >
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
                    
                )
            }

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
           
    </div>
  )
}


