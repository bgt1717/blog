import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">The Austin travel</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className ="headerImg" src="https://res.cloudinary.com/simpleview/image/upload/v1648755098/clients/austin/Austin_Skyline_Credit_Christopher_Sherman_lifetime__4f60343d-9f69-450c-8ad3-fa636761786d.jpg"
        alt = "" 
        />
    </div >
  )
}
