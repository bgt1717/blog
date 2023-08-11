import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./components/register/Register";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return(
    <Router>
      <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="write" element={<Write />} />
      <Route path="settings" element={<Settings />} />
      <Route path="/post/:postId" element={<Single />} ></Route> 
    </Routes>
  </Router>
  );
}

export default App;
