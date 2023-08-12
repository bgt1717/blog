import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileinput" /* style={{display: "none"}} */ />
                </div>
                <label>Username</label> 
                <input type="text" placeholder="lolo" />
                <label>Email</label> 
                <input type="text" placeholder="lolo@gmail.com" />
                <label>Password</label> 
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
      
    </div>
  )
}
