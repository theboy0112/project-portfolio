import qg from "./assets/qg.png";
import React, { useEffect } from "react";
import bone from "./assets/bone.png";
import smackies from "./assets/smackies.png";
import as from "./assets/as.png";
import mysqll from "./assets/mysqll.png";
import php from "./assets/php.png";
import calapebohol from "./assets/geminicalape.png";
import "./CSS/project.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className="projects-section" id="project">
      <div className="card-container">
        <div
          className="card animate__animated animate__fadeInUp"
          data-aos="fade-up"
        >
          <div className="card-image">
            <img src={qg} alt="QuickGas" />
          </div>
          <h5 className="card-title">QuickGas MIS</h5>

          <div className="card-overlay">
            <p className="card-description">
              A smart Management Information System for efficiently managing LPG
              orders, deliveries, and customer data in real-time.
            </p>
            <div className="card-buttons">
              <img src={as} alt="Android Studio" />
              <img src={php} alt="PHP" />
              <img src={mysqll} alt="MySQL" />
            </div>
          </div>
        </div>

        <div
          className="card animate__animated animate__fadeInUp"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="card-image">
            <img src={bone} alt="BOHECO" />
          </div>
          <h5 className="card-title">BOHECO I Billing Portal</h5>

          <div className="card-overlay">
            <p className="card-description">
              An online platform that lets customers easily view their electric
              bills, check account balances, and access billing history.
            </p>
            <div className="card-buttons">
              <button
                className="visit-button"
                onClick={() =>
                  window.open("https://boheco-billing.netlify.app/", "_blank")
                }
              >
                Visit Case Study
              </button>
            </div>
          </div>
        </div>

        <div
          className="card animate__animated animate__fadeInUp"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-image">
            <img src={smackies} alt="Smackies" />
          </div>
          <h5 className="card-title">Smackies Delivery</h5>

          <div className="card-overlay">
            <p className="card-description">
              A local ordering and delivery app offering quick and easy access
              to snacks, drinks, and meals from nearby vendors.
            </p>
            <div className="card-buttons">
              <img src={as} alt="Android Studio" />
              <img src={php} alt="PHP" />
              <img src={mysqll} alt="MySQL" />
            </div>
          </div>
        </div>

        <div
          className="card animate__animated animate__fadeInUp"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="card-image">
            <img src={calapebohol} alt="CalapeServeQ" />
          </div>
          <h5 className="card-title">CalapeServeQ</h5>

          <div className="card-overlay">
            <p className="card-description">
              A web-based queue management system designed for the Municipality
              of Calape to improve efficiency and transparency.
            </p>
            <div className="card-buttons">
              <button
                className="visit-button"
                onClick={() =>
                  window.open("https://calapeserveq.com", "_blank")
                }
              >
                Launch Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
