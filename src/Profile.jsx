import React from "react";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import "./CSS/profile.css";
import "animate.css";

function Profile() {
  return (
    <div className="container profile-responsive">
      <div className="profile-info">
        <h4 className="profile-edu">
          <img src={education} alt="Education" className="profile-icon" />
          Computer Science Student
        </h4>
        <h4 className="profile-exp">
          <img src={experience} alt="Experience" className="profile-icon" />
          Student Intern at Allied Care Experts Medical Center Bohol
        </h4>
      </div>

      <div className="calendar-wrapper">
        {/* GitHub Contribution Snake Animation */}
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <img
            alt="github contribution grid snake animation"
            src="https://raw.githubusercontent.com/theboy0112/project-portfolio/output/github-snake.svg"
            style={{ width: "100%", maxWidth: "800px" }}
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
