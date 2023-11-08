import React from 'react'
import "./sidebar.css"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(()=>{
  //   const getCats = async ()=>
  //   {
  //     const res = await axios.get("/categories")
  //     setCats(res.data)
  //   }
  //   getCats();
  // }, [])
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
        {/* <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">

            {cats.map((c)=> (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}

            

          </ul>
        </div> */}
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fa-brands fa-linkedin"></i>
                </div>
        </div>
    </div>
  )
}
