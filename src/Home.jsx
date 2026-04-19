import React, { useState, useEffect, useRef } from "react";
import skills from "./assets/skills.png";
import project from "./assets/project.png";
import home from "./assets/home.png";
import about from "./assets/about.png";
import message from "./assets/message.png";
import Typed from "typed.js";
import "./CSS/App.css";
import "animate.css";

function Home() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["Hello, I'm Clifboy!", "Computer Science Student"],
      typeSpeed: 50,
      backSpeed: 200,
      loop: true,
      showCursor: false,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="home-background">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="button">
              <img src={home} alt="Home" />
              <span className="label">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#profile" className="button">
              <img src={about} alt="Profile" />
              <span className="label">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#project" className="button">
              <img src={project} alt="Project" />
              <span className="label">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="button">
              <img src={skills} alt="Skills" />
              <span className="label">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="button">
              <img src={message} alt="Contact" />
              <span className="label">Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <button
              className="button"
              style={{ border: "none", background: "none", padding: "8px" }}
              onClick={toggleDarkMode}
            >
              <span style={{ fontSize: "20px" }}>{darkMode ? "🧔🏻‍♀️" : "🧔🏿‍♀️"}</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="hero-content animate__animated animate__fadeIn">
        <h1 className="hero-title animate__animated animate__pulse animate__infinite">
          <span ref={typedRef}></span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
