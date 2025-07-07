import React from "react";
import sad from "./assets/avatar.jpg";
import gd from "./assets/gd.jpg";
import sb from "./assets/sp.jpg";
import as from "./assets/as.png";
import php from "./assets/php.png";
import bbp from "./assets/bbp.png";
import react from "./assets/react.png";
import mysqll from "./assets/mysqll.png";
import dangerous from "./assets/dangerous.png";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="card">
        <img className="profile-pic" src={sad} />
        <div className="card-content">
          <h4>Smackies Ordering & Delivery App</h4>
          <h5>
            <p>Android Studio/Frontend</p>
            <img src={as} />
            <p>Php/Backend</p>
            <img src={php} />
            <p>Mysql/Database</p>
            <img src={mysqll} />
          </h5>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={bbp} />
        <div className="card-content">
          <h4>Boheco Billing</h4>
          <h5>
            <p>React/Frontend</p>
            <img src={react} />
          </h5>
          <button
            style={{ background: "lightblue", color: "blue" }}
            onClick={() =>
              window.open("https://boheco-billing.netlify.app/", "_blank")
            }
          >
            More
          </button>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={dangerous} />
        <div className="card-content">
          <h4>Dangerous Object Detection App</h4>
          <h5>
            <p>Android Studio/Frontend</p>
            <img src={as} />
            <p>Php/Backend</p>
            <img src={php} />
            <p>Mysql/Database</p>
            <img src={mysqll} />
          </h5>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={gd} />
        <div className="card-content">
          <h4>
            QuickGas MIS: A Smart Management Information System for LPG and
            Butane Distribution
          </h4>
          <h5>
            <p>Android Studio/React</p>
            <img src={as} />
            &nbsp;
            <img src={react} />
            <p>Php/Backend</p>
            <img src={php} />
            <p>Mysql/Database</p>
            <img src={mysqll} />s
          </h5>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
