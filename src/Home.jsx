import React from "react";
import { useNavigate } from "react-router-dom";
import sad from "./assets/sad.png";
import homebg from "./assets/portfolio.png";
import p from "./assets/p.png";
import o from "./assets/o.png";
import r from "./assets/r.png";
import f from "./assets/f.png";
import "./App.css";
import l from "./assets/l.png";
import i from "./assets/i.png";
import t from "./assets/t.png";
import gh from "./assets/gh.png";
import inn from "./assets/in.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div  className="wew">
      <img className="animate__animated animate__backInDown" src={p} />
      <img className="animate__animated animate__backInRight" src={o} />
      <img className="animate__animated animate__backInLeft" src={r} />
      <img className="animate__animated animate__backInUp" src={t} />
      <img className="animate__animated animate__backInRight" src={f} />
      <img className="animate__animated animate__backInLeft" src={o} />
      <img className="animate__animated animate__backInRight" src={l} />
      <img className="animate__animated animate__backInUp" src={i} />
      <img className="animate__animated animate__backInDown" src={o} />
      <div
        style={{
          backgroundColor: "transparent",
        }}
      >
        <nav>
          <ul>
            <li>
              <button
                onClick={() => window.location.reload()}
                className="button"
              >
                <a>Home</a>
              </button>
            </li>

            <li>
              <button onClick={() => navigate(`/project`)} className="button">
                <a>Project</a>
              </button>
            </li>
            <li>
              <button onClick={() => navigate(`/skills`)} className="button">
                <a>Skill</a>
              </button>
            </li>
            <li>
              <button onClick={() => navigate(`/profile`)} className="button">
                <a>Profile</a>
              </button>
            </li>
            <li>
              <button onClick={() => navigate(`/contact`)} className="button">
                <a>Contact</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
      <div className="icons-container">
      <button
        className="icons-gh  animate__animated animate__backInUp"
        style={{
          backgroundColor: "transparent",
        }}
        onClick={() => window.open("https://github.com/theboy0112", "_blank")}
      >
        <img src={gh}></img>
      </button>
      <button
        className="icons-gh animate__animated animate__backInDown"
        style={{
          backgroundColor: "transparent",
        }}
        onClick={() => window.open("https://www.linkedin.com/in/clifbelle-cabrera-676150372/", "_blank")}
      >
        <img src={inn}></img>
      </button>
      </div>
    </div>
  );
}

export default Home;
