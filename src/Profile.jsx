import React, { useEffect, useRef } from "react";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import "./CSS/profile.css";
import "animate.css";
function Profile() {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current && window.GitHubCalendar) {
      window.GitHubCalendar(calendarRef.current, "theboy0112", {
        responsive: true,
      });

      setTimeout(() => {
        const days = calendarRef.current.querySelectorAll(
          ".ContributionCalendar-day"
        );

        days.forEach((day) => {
          const date = day.getAttribute("data-date");

          day.addEventListener("mouseenter", function (e) {
            const tooltip = document.createElement("div");
            tooltip.className = "calendar-tooltip";
            tooltip.innerText = date;
            document.body.appendChild(tooltip);

            const rect = day.getBoundingClientRect();
            tooltip.style.top = `${rect.top - 30}px`;
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
          });

          day.addEventListener("mouseleave", function () {
            const tooltip = document.querySelector(".calendar-tooltip");
            if (tooltip) tooltip.remove();
          });
          day.addEventListener("click", function () {
            alert("Date: " + date);
          });
        });
      }, 1500);
    }
  }, []);
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
        <div className="calendar" ref={calendarRef}>
          Loading contributions...
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
