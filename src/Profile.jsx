import React, { useEffect, useRef } from "react";
import boyyy from "./assets/biboy.png";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import gh from "./assets/gh.png";
import inn from "./assets/in.png";
function Profile() {
  const navigate = useNavigate();
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        strings: ["CLIFBELLE CABRERA", "COMPUTER SCIENCE"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
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

      <div>
        <img src={boyyy} alt="Profile" />
      </div>

      <h2 style={{ color: "#1b3356", fontSize: "24px" }}>
        Aspiring Frontend Developer
      </h2>

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "24px",
          color: "#1b3356",
        }}
      >
        <span ref={el} style={{ fontWeight: "bold" }}></span>
        <div>
          <h3>
            Passionate about web development and constantly learning new
            technologies
          </h3>
        </div>
        <br></br>
        <br></br>

        <div className="social-links">
          <div className="icons-container">
            <button
              className="icons-gh"
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() =>
                window.open("https://github.com/theboy0112", "_blank")
              }
            >
              <img src={gh}></img>
            </button>

            <button
              className="icons-gh"
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/clifbelle-cabrera-676150372/",
                  "_blank"
                )
              }
            >
              <img src={inn}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
