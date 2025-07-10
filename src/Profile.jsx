import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import boyyy from "./assets/biboy.png";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import "./profile.css";

function Profile() {
  const typedRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hello, I'm Clifbelle!", "Welcome to my profile."],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    if (calendarRef.current && window.GitHubCalendar) {
      window.GitHubCalendar(calendarRef.current, "theboy0112", {
        responsive: true,
      });
    }

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <img src={boyyy} alt="Profile" />
      <div className="menu">
        <span style={{ color: "black" }} ref={typedRef}></span>
        <span>
          <p style={{ color: "black" }}>
            Aspiring frontend developer passionate about crafting clean and
            interactive user interfaces.
          </p>
        </span>
      </div>
      <div>
        <h4>
          <img src={education} alt="Education" /> &nbsp; Computer Science
          Student
        </h4>
        <h4>
          <img src={experience} alt="Experience" /> &nbsp; Student Intern at
          Allied Care Experts Medical Center Bohol
        </h4>
      </div>

      <div className="calendar" ref={calendarRef}>
        Loading contributions...
      </div>
    </div>
  );
}

export default Profile;
