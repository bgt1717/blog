import { Link } from "react-router-dom"
import "./register.css"
import { useState} from "react"
import axios from "axios"

export default function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false);


  const handleSubmit = async (e) =>{
    //prevents refreshing page when submitting.
    e.preventDefault();
    setError(false);
    try{
        const res = await axios.post("https://blogbackend-6zuh.onrender.com/auth/register", {
          username,
          email,
          password,
    });
    //if there's data and sucessfully register, redirects to login page. 
    res.data && window.location.replace("/login");
  }catch(err){
    // console.log(err)
    setError(true);
  }
  };
  return (
    <div className ="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" 
                   className="registerInput" 
                   placeholder="Enter username..."
                   onChange={e=>setUsername(e.target.value)}
            />

            <label>Email</label>
            <input type="text" 
                   className="registerInput" 
                   placeholder="Enter email..."
                   onChange={e=>setEmail(e.target.value)}
            />

            <label>Password</label>
            <input type="password" 
                   className="registerInput" 
                   placeholder="Enter password..."
                   onChange={e=>setPassword(e.target.value)}
            />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
        </button>
        {/* If there's an error, use this span. */}
        {error && <span style={{ color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
