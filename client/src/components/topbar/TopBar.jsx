import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user, dispatch} = useContext(Context);

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
                    <img className = "topImg"
                    src="https://res.cloudinary.com/simpleview/image/upload/v1648755098/clients/austin/Austin_Skyline_Credit_Christopher_Sherman_lifetime__4f60343d-9f69-450c-8ad3-fa636761786d.jpg" 
                    alt = "" >
                </img>
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


