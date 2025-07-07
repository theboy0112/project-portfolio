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
import inn from "./assets/in.png";
import "./App.css";
import "animate.css";

function Home() {
  return (
    <div className="home-background">
      
      <div style={{ backgroundColor: "transparent" }}>
        <nav>
          <ul>
            <li>
              <a href="#home" className="button">
                Home
              </a>
            </li>
             <li>
              <a href="#profile" className="button">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="button">
                Project
              </a>
            </li>
            <li>
              <a href="#skills" className="button">
                What I Know
              </a>
            </li>
           
            <li>
              <a href="#contact" className="button">
                Contact
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