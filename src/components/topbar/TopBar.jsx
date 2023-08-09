import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className = "top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-linkedin"></i>
        {/* can add more icons from https://fontawesome.com/icons/ */}
        </div>
        <div className="topCenter">
            <ul className= "topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>

            </ul>
        </div>
        <div className="topRight">
            <img className = "topImg"
                src="https://res.cloudinary.com/simpleview/image/upload/v1648755098/clients/austin/Austin_Skyline_Credit_Christopher_Sherman_lifetime__4f60343d-9f69-450c-8ad3-fa636761786d.jpg" 
                alt = "" >
            </img>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
           
    </div>
  )
}


