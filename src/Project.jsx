import React from "react";
import sad from "./assets/avatar.jpg";
import crab from "./assets/crab.png";
import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
  return (
    <div className="bg">
      <div className="div-home">
        <button
          onClick={() => navigate(`/`)}
          style={{
            position: "absolute",
            top: "2%",
            left: "1%",
            fontSize: "30px",
            backgroundColor: "transparent",
            border: "none",
            color: "#1b3356",
            cursor: "pointer",
          }}
        >
          Home
        </button>

        <div className="card-container">
          <div className="card">
            <img className="profile-pic" src={sad} />
            <div className="card-content">
              <h3>Smackies Ordering & Delivery App</h3>
              <p>
                Smackies is a convenient and user-friendly food and goods
                delivery app built using Android Studio. It connects customers
                with local vendors and delivery riders through a seamless mobile
                interface. The app uses a MySQL database to handle real-time
                order tracking, customer profiles, product listings, and
                delivery status updates. Smackies ensures fast, reliable
                deliveries with secure order management, ideal for modern
                on-demand logistics.
              </p>
              <a href="/contact" className="btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="card">
            <img className="profile-pic" src={crab} />
            <div className="card-content">
              <h3>Crab Detecting App</h3>
              <p>
                This mobile application uses Android Studio as the frontend and
                integrates a Python-based machine learning model developed in
                Google Colab. With Roboflow's powerful image dataset and
                training tools, the app can detect crabs in real-time using the
                device camera. Ideal for marine research or coastal monitoring,
                it provides accurate visual identification, capturing and
                uploading detected crab images automatically for data logging
                and analysis.
              </p>
              <a href="/contact" className="btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="card">
            <img className="profile-pic" src={sad} />
            <div className="card-content">
              <h3>Dangerous Object Detection App</h3>
              <p>
                This Android Studio-based mobile app is designed for real-time
                detection of dangerous objects (such as weapons) using advanced
                image recognition technology. When a threat is detected, the app
                automatically initiates a phone call to emergency contacts or
                authorities. It also integrates with a backend database to
                record which users or companies are using the app and logs who
                triggered emergency calls.
              </p>
              <a href="/contact" className="btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="card">
            <img className="profile-pic" src={crab} />
            <div className="card-content">
              <h3>Crab Detecting App</h3>
              <p>
                This mobile application uses Android Studio as the frontend and
                integrates a Python-based machine learning model developed in
                Google Colab. With Roboflow's powerful image dataset and
                training tools, the app can detect crabs in real-time using the
                device camera. Ideal for marine research or coastal monitoring,
                it provides accurate visual identification, capturing and
                uploading detected crab images automatically for data logging
                and analysis.
              </p>
              <a href="/contact" className="btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
