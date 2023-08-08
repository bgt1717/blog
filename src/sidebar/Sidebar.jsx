import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className = "sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle"> ABOUT ME </span>
          <img className ="img" src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1380&t=st=1691521241~exp=1691521841~hmac=eb4a987bfa47aa8574d907616f80303cd8c67978405870794e14e9d96147c34b"
          alt = ""
          />
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>


          </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fa-brands fa-linkedin"></i>
                </div>
        </div>
    </div>
  )
}
