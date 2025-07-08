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
  const typedRef = useRef(null);
  const soundRef = useRef(null);

  useEffect(() => {
    const playSound = () => {
      if (soundRef.current) {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
      }
    };

    const typed = new Typed(typedRef.current, {
      strings: ["Clifbelle Cabrera"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      preStringTyped: playSound,
      onStringTyped: playSound,
      onTypingPaused: () => {},
      onTypingResumed: playSound,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="row">
      <div className="left-column">
        <img src={boyyy} alt="Profile" />
        <h2>
          <span ref={typedRef}></span>
        </h2>
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
            <h2>4th year Computer Science Student</h2>
          </ul>
        </div>
        <br></br>
        <div>
          <img src={experience} alt="Experience" /> <h1>Experience</h1>
          <ul>
            <h2>Student Intern at Allied Care Experts Medical Center Bohol</h2>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
