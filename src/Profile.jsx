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
      strings: ["Hello, I'm Clifbelle!"],
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
    <div className="container profile-responsive">
      <div className="profile-img-wrapper">
        <img src={boyyy} alt="Profile" className="profile-img" />
      </div>
      <div className="menu">
        <span style={{ color: "black" }} ref={typedRef}></span>

      </div>
      <div className="calendar-wrapper">

        <div className="calendar" ref={calendarRef}>
          Loading contributions...
        </div>
        <h5>A passionate learner exploring programming, algorithms, and software development to solve real-world problems through technology.</h5>
      </div>
      <div className="profile-info">
        <h4 className="profile-edu">
          <img src={education} alt="Education" className="profile-icon" />  Computer Science
          Student
        </h4>
        <h4 className="profile-exp">
          <img src={experience} alt="Experience" className="profile-icon" />  Student Intern at
          Allied Care Experts Medical Center Bohol
        </h4>
      </div>
    </div>
  );
}

export default Profile;
