import contact from "./assets/contact.png";
import dcc from "./assets/dcc.png";
import email from "./assets/email.png";
import li from "./assets/li.png";
import gh from "./assets/gh.png";
import "./App.css";

function Contact() {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-back">
            <img src={li} />
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/clifbelle-cabrera-676150372/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>

            <img src={gh} />

            <button
              onClick={() =>
                window.open("https://github.com/theboy0112", "_blank")
              }
            >
              Github
            </button>
            <img src={dcc} />
            <button
              onClick={() =>
                window.open("https://discord.gg/DZCP34ST", "_blank")
              }
            >
              Discord Server
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
