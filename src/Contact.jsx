import React, { useRef, useEffect } from "react";
import gmail from "./assets/gmail.png";
import at from "./assets/at.png";
import dc from "./assets/dc.png";
import tel from "./assets/tel.png";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
function Contact() {
  const navigate = useNavigate();
   const el = useRef(null);
    const typedInstance = useRef(null);
  
    useEffect(() => {
      typedInstance.current = new Typed(el.current, {
        strings: [
          "CONTACTS",
        ],
        typeSpeed: 300,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        typedInstance.current.destroy();
      };
    }, []);
  
  return (
    <div className="div-home ">
      <div className="div-home">
         <div style={{}} className="div-home">
      <button
        onClick={() => navigate(`/`)}
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          fontSize: "30px",
          backgroundColor: "transparent",
          border: "none",
          color: "#1b3356",
          cursor: "pointer",
        }}
      >
        Home
      </button>
           <div className="info">
        <span ref={el} style={{fontSize: "2rem", fontWeight: "bold", color:"#102542",}}></span>
      </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              className="profile-pic animate__animated animate__backInLeft"
              src={tel}
            />
            <div className="card-content">
              <h3>Phone Number</h3>
             
                  <li>
                    <label>SMART:</label>&nbsp;09317209321
                  </li>
                  <li>
                    <label>DITO:</label>&nbsp;09998765732
                  </li>
               
             
              <a href="/contact" className="btn">
                Call us
              </a>
            </div>
          </div>
          <div className="card">
            <img className="profile-pic animate__animated animate__backInUp" src={at} />
            <div className="card-content">
              <h3>GMAIL</h3>
              
                
                  <li>
                    <label>GMAIL:</label>&nbsp;biboy@gmail.com
                  </li>
                  <li>
                    <label>EMAIL:</label>&nbsp;clifbelle@gmail.com
                  </li>
                
              
              <a href="/contact" className="btn">
                Send Email
              </a>
            </div>
          </div>
          <div className="card">
            <img className="profile-pic animate__animated animate__backInRight" src={dc} />
            <div className="card-content">
              <h3>Discord</h3>
              <li>https://discord.gg/Rg4uhYMN</li>
              <a href="https://discord.gg/Rg4uhYMN" className="btn">
                Join Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
