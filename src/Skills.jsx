import React from "react";
import gmail from "./assets/gmail.png";
import tailwind from "./assets/tailwind.png";
import javaa from "./assets/javaa.png";
import javaaa from "./assets/javaaa.png";
import react from "./assets/react.png";
import nest from "./assets/nest.png";
import php from "./assets/php.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import as from "./assets/as.png";
import "animate.css";

function Skills() {
  return (
    <ul className="cards-container">
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={javaa} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={react} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={nest} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={php} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={node} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={express} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={as} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={javaaa} />
      </li>
      <li className="cards">
        <span></span>
        <span></span>
        <span></span>
        <img src={tailwind} />
      </li>
    </ul>
  );
}

export default Skills;
