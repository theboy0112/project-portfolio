import React, { useEffect, useRef } from "react";
import boyyy from "./assets/biboy.png";
import boy from "./assets/boy.jpg";
import Typed from "typed.js";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import gh from "./assets/gh.png";
import iii from "./assets/iii.png";
import education from "./assets/education.png";
import experience from "./assets/experience.png";

function Profile() {
  return (
    <div className="row">
      <div className="column">
        <img src={boyyy}/>
        <h2>Clifbelle Cabrera</h2>
        <h2>Aspiring Frontend Developer</h2>
        </div>
        <div className="column">
          <img src={education}/> <p>Computer Science Student</p>
          <img src={experience}/> <p>Student Intern at Allied Care Experts Medical Center Bohol</p>
          
        
      </div>
    </div>
  );
}

export default Profile;
