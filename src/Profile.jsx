import React from "react";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import "./CSS/profile.css";
import "animate.css";

function Profile() {
  return (
    <div className="container" id="profile">
      <div className="profile-info animate__animated animate__fadeInLeft">
        <h4 className="profile-edu">
          <img src={education} alt="Education" className="profile-icon" />
          <span>Computer Science Student</span>
        </h4>
        <h4 className="profile-exp">
          <img src={experience} alt="Experience" className="profile-icon" />
          <span>
            Student Intern at Allied Care Experts Medical Center Bohol
          </span>
        </h4>
      </div>

      <div className="calendar-wrapper animate__animated animate__fadeInRight">
        <div className="snake-container">
          <img
            alt="github contribution grid snake animation"
            src="https://raw.githubusercontent.com/theboy0112/project-portfolio/output/github-snake.svg"
            className="github-snake"
          />
        </div>

        <h5>
          Aspiring front-end developer eager to learn and grow in web
          development, with a strong interest in creating user-friendly and
          visually appealing websites.
        </h5>
      </div>

    </div>
  );
}

export default Profile;
