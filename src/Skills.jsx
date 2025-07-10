import React, { useState, useEffect } from "react";
import tailwind from "./assets/tailwind.png";
import javaa from "./assets/javaa.png";
import javaaa from "./assets/javaaa.png";
import react from "./assets/react.png";
import nest from "./assets/nest.png";
import php from "./assets/php.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import as from "./assets/as.png";
import mysql from "./assets/mysqll.png";
import "./cards.css";

function Skills() {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      ("ontouchstart" in window) || (navigator.maxTouchPoints > 0)
    );
  }, []);

  const cards = [
    {
      img: javaa,
      title: "JavaScript",
    },
    {
      img: react,
      title: "React",
    },
    {
      img: nest,
      title: "NestJS",
    },
    {
      img: php,
      title: "Php",
    },

    {
      img: as,
      title: "Android Studio",
    },
    {
      img: javaaa,
      title: "Java",
    },
    {
      img: tailwind,
      title: "Tailwind CSS",
    },
    {
      img: mysql,
      title: "MySQL Database",
    },
  ];

  const handleCardInteraction = (index, title) => {
    const hasHover = window.matchMedia("(hover: hover)").matches;

    if (hasHover) {
      setHoveredTitle(title);
      setActiveCard(index);
    } else {
      if (activeCard === index) {
        setActiveCard(null);
        setHoveredTitle("");
      } else {
        setActiveCard(index);
        setHoveredTitle(title);
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setHoveredTitle("");
      setActiveCard(null);
    }
  };

  return (
    <div className="skills">
      <ul className="cards-container">
        {cards.map((card, index) => (
          <li
            className={`cards ${activeCard === index ? "active" : ""}`}
            key={index}
            onClick={() => {
              if (isTouch) {
                setActiveCard(activeCard === index ? null : index);
                setHoveredTitle(activeCard === index ? "" : card.title);
              }
            }}
            onMouseEnter={() => {
              if (!isTouch) {
                setHoveredTitle(card.title);
                setActiveCard(index);
              }
            }}
            onMouseLeave={() => {
              if (!isTouch) {
                setHoveredTitle("");
                setActiveCard(null);
              }
            }}
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
