import React, { useRef, useEffect } from "react";
import gmail from "./assets/gmail.png";
import at from "./assets/at.png";
import dc from "./assets/dc.png";
import tel from "./assets/tel.png";
import "./App.css";
import "./flipcard.css";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={at} />
          </div>
          <div className="flip-card-back">
            <h5>clifboycabrera12@gmail.com</h5>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={dc} />
          </div>
          <div className="flip-card-back">
            <button
              onClick={() =>
                window.open("https://discord.gg/DZCP34ST", "_blank")
              }
            >
              Join Server
            </button>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={tel} />
          </div>
          <div className="flip-card-back">
            <h5>Smart: 0909090912</h5>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
