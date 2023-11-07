import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./components/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return(
    <Router>
    <TopBar />
    <Routes>
      <Route path="/" exact element={<Home></Home>}></Route> 
      {/* if there is a user, go to Home. If not a user go to Register. */}
      <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
      <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
      {/* If there is a user go to Write. If not, go to Register. */}
      <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
      <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
      {/* Everyone can see this page. No conditions needed for posts. */}
      <Route path="/post/:postId" element={<Single />} ></Route> 
    </Routes>
  </Router>
  );
}

export default App;
