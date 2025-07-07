import React, { useState } from "react";
import tailwind from "./assets/tailwind.png";
import javaa from "./assets/javaa.png";
import javaaa from "./assets/javaaa.png";
import react from "./assets/react.png";
import nest from "./assets/nest.png";
import php from "./assets/php.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import as from "./assets/as.png";
import "./cards.css";

function Skills() {
  const [hoveredTitle, setHoveredTitle] = useState("");

  const cards = [
    {
      img: javaa,
      title:
        "Lightweight scripting language for adding interactivity to web pages.",
    },
    {
      img: react,
      title:
        "A JavaScript library for building dynamic and interactive user interfaces.",
    },
    {
      img: nest,
      title:
        "A Progressive Node.js framework for building efficient, scalable server-side apps.",
    },
    {
      img: php,
      title:
        "A Server-side scripting language used for web development and backend logic.",
    },
    {
      img: node,
      title:
        "A Runtime environment for running JavaScript on the server.",
    },
    {
      img: express,
      title:
        "A Lightweight Node.js framework for building APIs and web apps.",
    },
    {
      img: as,
      title:
        "A IDE for building Android applications using Java or Kotlin.",
    },
    {
      img: javaaa,
      title:
        "Java development using NetBeans IDE, great for building desktop, web, and enterprise apps.",
    },
    {
      img: tailwind,
      title:
        "A Utility-first CSS framework for fast and responsive web design.",
    },
  ];

  return (
    <div className="skills-wrapper">
      <div className={`cards-description ${hoveredTitle ? "visible" : ""}`}>
        <h1>{hoveredTitle}</h1>
      </div>

      <ul className="cards-container">
        {cards.map((card, index) => (
          <li
            className="cards"
            key={index}
            onMouseEnter={() => setHoveredTitle(card.title)}
            onMouseLeave={() => setHoveredTitle("")}
          >
            <span></span>
            <span></span>
            <span></span>
            <img src={card.img} alt={card.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
