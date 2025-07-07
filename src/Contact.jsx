import React, { useRef, useEffect } from "react";
import gmail from "./assets/gmail.png";
import at from "./assets/at.png";
import contact from "./assets/contact.png";
import dcc from "./assets/dcc.png";
import email from "./assets/email.png";
import li from "./assets/li.png";
import card from "./assets/card.png";
import gh from "./assets/gh.png";
import location from "./assets/location.png";
import "./App.css";
import "./flipcard.css";


function Contact() {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        
        <div className="flip-card-inner">
          <div className="flip-card-front"> <img src={card}/></div>
         
          <div className="flip-card-back">
            <ul className="contact-info">
              <li>
                <img src={location} />
              </li>
              <li>777 CALAPE BOHOL</li>
              <li>
                <img src={contact} />
              </li>
              <li>+63 991232132</li>

              <li>
                <img src={email} />
              </li>
              <li>clifboycabrera12@gmail.com</li>
              <li>
                <img src={li} />
              </li>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/clifbelle-cabrera-676150372/",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </button>
              <li>
                <img src={gh} />
              </li>

              <button
                onClick={() =>
                  window.open("https://github.com/theboy0112", "_blank")
                }
              >
                Github
              </button>
              <li>
                <img src={dcc} />
              </li>

              <button
                onClick={() =>
                  window.open("https://discord.gg/DZCP34ST", "_blank")
                }
              >
                Join Server
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
