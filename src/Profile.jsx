import React, { useEffect, useRef } from "react";
import boyyy from "./assets/biboy.png";
import boy from "./assets/boy.jpg";

import Typed from "typed.js";
import "./profile.css";
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
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="menu">
        <img src={boyyy} /><br></br><span ref={typedRef}></span>
      </div>
      <div className="content">
        I am a 4th-year Computer Science student and an aspiring Front-End
        Developer with a passion for creating responsive, user-friendly, and
        accessible web applications. I have hands-on experience with HTML, CSS,
        JavaScript, and React, and a solid understanding of UI/UX principles,
        responsive design, and modern development tools. Eager to learn and grow
        in a collaborative environment, I enjoy turning design ideas into
        functional and visually appealing digital experiences. I'm actively
        building my portfolio and looking forward to contributing to real-world
        projects that combine creativity and code.
      </div>
      <div className="footer">
        <h4>
          <img src={education} />
          &nbsp; Computer Science Student
        </h4>
        <h4>
          <img src={experience} />
          &nbsp; Student Intern at Allied Care Experts Medical Center Bohol
        </h4>
      </div>
    </div>
  );
}

export default Profile;
