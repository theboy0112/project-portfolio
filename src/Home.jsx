import React from "react";
import sad from "./assets/sad.png";
import homebg from "./assets/portfolio.png";
import p from "./assets/p.png";
import o from "./assets/o.png";
import r from "./assets/r.png";
import f from "./assets/f.png";
import l from "./assets/l.png";
import i from "./assets/i.png";
import t from "./assets/t.png";
import gh from "./assets/gh.png";
import skills from "./assets/skills.png";
import project from "./assets/project.png";
import inn from "./assets/in.png";
import home from "./assets/home.png";
import about from "./assets/about.png";
import contact from "./assets/contact.png";
import "./App.css";
import "animate.css";

function Home() {
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
              <a href="#contact" className="button">
                <img src={contact} alt="Contact" />
                <span className="label">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <br />

      <div className="icons-container">
        <button
          className="icons-gh animate__animated animate__backInDown"
          style={{ backgroundColor: "transparent" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/clifbelle-cabrera-676150372/",
              "_blank"
            )
          }
        >
          <img src={inn} />
        </button>
      </div>
    </div>
  );
}

export default Home;
