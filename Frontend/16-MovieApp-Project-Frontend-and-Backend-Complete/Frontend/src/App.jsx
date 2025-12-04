import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Liked from "./pages/Liked";
import Home from "./pages/Home";
import UserContext from "./Context/UserContext";
import { useState } from "react";

function App() {

  const [id, setId] = useState("");
 
  return (
    <>
      <UserContext.Provider value={{ id, setId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} Route />
            <Route path="/signup" element={<Signup />} Route />
            <Route path="/login" element={<Login />} Route />
            <Route path="/liked" element={<Liked />} Route />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
