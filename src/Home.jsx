import React, { useEffect, useRef } from "react";
import skills from "./assets/skills.png";
import project from "./assets/project.png";
import inn from "./assets/in.png";
import home from "./assets/home.png";
import about from "./assets/about.png";
import message from "./assets/message.png";
import contact from "./assets/contact.png";
import Typed from "typed.js";
import "./CSS/App.css";
import "animate.css";

function Home() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["Hello, I'm Clifbelle!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div className="home-background">
      <div style={{ backgroundColor: "transparent" }}>
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
              <a href="#contactt" className="button">
                <img src={message} alt="Contactt" />
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br />
      <div className="icons-container">
        <span style={{ color: "black" }} ref={typedRef}></span>
      </div>
    </div>
  );
}

export default Home;
