import React from "react";
import sad from "./assets/avatar.jpg";
import gd from "./assets/gd.jpg";
import sb from "./assets/sp.jpg";
import as from "./assets/as.png";
import php from "./assets/php.png";
import bbp from "./assets/bbp.png";
import react from "./assets/react.png";
import bone from "./assets/bone.png";
import mysqll from "./assets/mysqll.png";
import dangerous from "./assets/dangerous.png";
import "./project.css";
import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
  return (
    <div class="card-container">
        <div class="card">
            <img class="profile-pic" src={bbp} alt="Food delivery app" />
            <div class="card-content">
                <div>
                    <h4>Smackies Ordering & Delivery App</h4>
                    <div class="tech-section">
                        <div class="tech-item">
                            <p>Android Studio/Frontend</p>
                            <img src={as} alt="Android Studio" />
                        </div>
                        <div class="tech-item">
                            <p>PHP/Backend</p>
                            <img src={php} alt="PHP" />
                        </div>
                        <div class="tech-item">
                            <p>MySQL/Database</p>
                            <img src={mysqll} alt="MySQL" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <img class="profile-pic" src={bbp} alt="Billing system" />
            <div class="card-content">
                <div>
                    <h4>Boheco Billing</h4>
                    <div class="tech-section">
                        <div class="tech-item">
                            <p>React/Frontend</p>
                            <img src={react} alt="React" />
                        </div>
                    </div>
                </div>
                <button class="more-btn" onclick="window.open('https://boheco-billing.netlify.app/', '_blank')">
                    View Project
                </button>
            </div>
        </div>

        <div class="card">
            <img class="profile-pic" src={bbp} alt="AI detection" />
            <div class="card-content">
                <div>
                    <h4>Dangerous Object Detection App</h4>
                    <div class="tech-section">
                        <div class="tech-item">
                            <p>Android Studio/Frontend</p>
                            <img src={as} alt="Android Studio" />
                        </div>
                        <div class="tech-item">
                            <p>PHP/Backend</p>
                            <img src={php} alt="PHP" />
                        </div>
                        <div class="tech-item">
                            <p>MySQL/Database</p>
                            <img src={mysqll} alt="MySQL" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <img class="profile-pic" src={bbp} alt="Gas distribution system" />
            <div class="card-content">
                <div>
                    <h4>QuickGas MIS</h4>
                    <div class="tech-section">
                        <div class="tech-item">
                            <p>Android Studio/React</p>
                            <img src={react} alt="Android Studio" />
          
                        </div>
                        <div class="tech-item">
                            <p>PHP/Backend</p>
                            <img src={php} alt="PHP" />
                        </div>
                        <div class="tech-item">
                            <p>MySQL/Database</p>
                            <img src={mysqll} alt="MySQL" />
                        </div>
                    </div>
                </div>
                <a href="/contact" class="btn">Contact Us</a>
            </div>
        </div>
    </div>
  );
}

export default Project;
