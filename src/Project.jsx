import React from "react";
import sad from "./assets/avatar.jpg";
import gd from "./assets/gd.jpg";
import sb from "./assets/sp.jpg";
import crab from "./assets/crab.png";
import dangerous from "./assets/dangerous.png";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="card">
        <img className="profile-pic" src={sad} />
        <div className="card-content">
          <h4>Smackies Ordering & Delivery App</h4>
          <h5>
            Smackies is a convenient and user-friendly food and goods delivery
            app built using Android Studio. It connects customers with local
            vendors and delivery riders through a seamless mobile interface. The
            app uses a MySQL database to handle real-time order tracking,
            customer profiles, product listings, and delivery status updates.
            Smackies ensures fast, reliable deliveries with secure order
            management, ideal for modern on-demand logistics.
          </h5>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={crab} />
        <div className="card-content">
          <h4>Boheco Billing</h4>
          <h5>
            A web-based platform that allows users to conveniently view their
            BOHECO electricity bill history, including past payments, due dates,
            and billing amounts for easy tracking and management.
          </h5>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={dangerous} />
        <div className="card-content">
          <h4>Dangerous Object Detection App</h4>
          <h5>
            This Android Studio-based mobile app is designed for real-time
            detection of dangerous objects (such as weapons) using advanced
            image recognition technology. When a threat is detected, the app
            automatically initiates a phone call to emergency contacts or
            authorities. It also integrates with a backend database to record
            which users or companies are using the app and logs who triggered
            emergency calls.
          </h5>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </div>
      <div className="card">
        <img className="profile-pic" src={gd} />
        <div className="card-content">
          <h4>
            QuickGas MIS: A Smart Management Information System for LPG and
            Butane Distribution
          </h4>
          <h5>
            Android and web-based smart Management Information System designed
            to efficiently manage LPG and butane distribution. Tailored for
            small to medium enterprises, it offers real-time order tracking,
            inventory management, delivery scheduling, and customer data
            insights—streamlining operations across both mobile and desktop
            platforms for faster, safer, and more reliable gas delivery
            services.
          </h5>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
