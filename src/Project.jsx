import React from "react";
import as from "./assets/as.png";
import php from "./assets/php.png";
import qg from "./assets/qg.png";
import react from "./assets/react.png";
import bone from "./assets/bone.png";
import smackies from "./assets/smackies.png";
import mysqll from "./assets/mysqll.png";
import "./project.css";

function Project() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={qg} alt="QuickGas" />
        <h5>
          QuickGas MIS is a smart Management Information System for efficiently
          managing LPG orders, deliveries, and customer data in real-time.
        </h5>
        <div className="card-buttons">
          <button>
            <img src={as} alt="as" />
          </button>
          <button>
            <img src={php} alt="php" />
          </button>
          <button>
            <img src={mysqll} alt="mysql" />
          </button>
        </div>
      </div>

      <div className="card">
        <img src={bone} alt="BOHECO" />
        <h5>
          BOHECO I Billing Portal is an online platform that lets customers
          easily view their electric bills, check account balances, and access
          billing history.
        </h5>
        <div className="card-buttons">
          <button>
            <img src={react} alt="react" />
          </button>
          <button
            className="waw"
            onClick={() =>
              window.open("https://boheco-billing.netlify.app/", "_blank")
            }
          >
            Visit Page
          </button>
        </div>
      </div>

      <div className="card">
        <img src={smackies} alt="Smackies" />
        <h5>
          Smackies is a local ordering and delivery app in Calape that offers
          quick and easy access to snacks, drinks, and meals from nearby
          vendors.
        </h5>
        <div className="card-buttons">
          <button>
            <img src={as} alt="as" />
          </button>
          <button>
            <img src={php} alt="php" />
          </button>
          <button>
            <img src={mysqll} alt="mysql" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
