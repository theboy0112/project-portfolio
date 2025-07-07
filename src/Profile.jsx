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
      <div className="left-column">
        <img src={boy} alt="Profile" />
        <h2>Clifbelle Cabrera</h2>
        <h2>Aspiring Frontend Developer</h2>
        <h3>
          Aspiring Frontend Developer and 4th year Computer Science student
          passionate about building responsive, user-friendly web applications.
          Skilled in HTML, CSS, JavaScript, and React, with a strong foundation
          in software development and a keen eye for design.
        </h3>
      </div>

      <div className="right-column">
        <div>
          <img src={education} alt="Education" /> <h1>Education</h1>
          <ul>
            <h3>Computer Science Student</h3>
          </ul>
        </div>
        <br></br>
        <div>
          <img src={experience} alt="Experience" /> <h1>Experience</h1>
          <ul>
            <h3>Student Intern at Allied Care Experts Medical Center Bohol</h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
