import qg from "./assets/qg.png";
import React, { useEffect } from "react";
import bone from "./assets/bone.png";
import smackies from "./assets/smackies.png";
import as from "./assets/as.png";
import mysqll from "./assets/mysqll.png";
import php from "./assets/php.png";
import crab from "./assets/crab.png";
import fire from "./assets/fire.png";
import "./CSS/project.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className="projects-section">
      <h1
        className="animate__animated animate__rubberBand animate__infinite"
        style={{ textAlign: "center" }}
      >
        MY PROJECT
      </h1>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src={qg} alt="QuickGas" />
            <h5 style={{ marginTop: "50px" }} className="card-title">
              QuickGas MIS
            </h5>
          </div>

          <div className="card-overlay">
            <p className="card-description">
              QuickGas MIS is a smart Management Information System for
              efficiently managing LPG orders, deliveries, and customer data in
              real-time.
            </p>
            <div className="card-buttons">
              <img src={as} />
              <img src={php} />
              <img src={mysqll} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={bone} alt="BOHECO" />
            <h5 style={{ marginTop: "50px" }} className="card-title">
              BOHECO I Billing Portal
            </h5>
          </div>

          <div className="card-overlay">
            <p className="card-description">
              BOHECO I Billing Portal is an online platform that lets customers
              easily view their electric bills, check account balances, and
              access billing history.
            </p>
            <div className="card-buttons">
              <button
                className="visit-button"
                onClick={() =>
                  window.open("https://boheco-billing.netlify.app/", "_blank")
                }
              >
                Visit Page
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={smackies} alt="Smackies" />
            <h5 style={{ marginTop: "50px" }} className="card-title">
              Smackies
            </h5>
          </div>
          <div className="card-overlay">
            <p className="card-description">
              Smackies is a local ordering and delivery app in Calape that
              offers quick and easy access to snacks, drinks, and meals from
              nearby vendors.
            </p>
            <div className="card-buttons">
              <img src={as} />

              <img src={php} />

              <img src={mysqll} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={crab} alt="CRAB" />
            <h5 style={{ marginTop: "50px" }} className="card-title">
              Crab Detection App
            </h5>
          </div>
          <div className="card-overlay">
            <p className="card-description">
              A YOLO-based crab detection system trained using annotated images
              from Roboflow and deployed via Google Colab for real-time and
              image-based object detection.
            </p>
            <div className="card-buttons">
              <img src={as} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={fire} alt="FIRE" />
            <h5 style={{ marginTop: "50px" }} className="card-title">
              Crab Detection App
            </h5>
          </div>
          <div className="card-overlay">
            <p className="card-description">
              A mobile-based firearm detection system using Android Studio,
              integrated with a PHP backend and MySQL database to detect and log
              firearm presence from camera input in real-time.
            </p>
            <div className="card-buttons">
              <img src={as} />
              <img src={php} />
              <img src={mysqll} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
