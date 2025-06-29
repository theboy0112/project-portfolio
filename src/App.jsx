import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import "./App.css";
import "./index.css";
import 'animate.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
