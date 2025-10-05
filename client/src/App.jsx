import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignUp";
import Projects from "./pages/Projects";

import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/dashboard"  element={<DashBoard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
