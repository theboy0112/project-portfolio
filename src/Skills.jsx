import React, { useState, useEffect } from "react";
import tailwind from "./assets/tailwind.png";
import javaa from "./assets/javaa.png";
import javaaa from "./assets/javaaa.png";
import react from "./assets/react.png";
import nest from "./assets/nest.png";
import php from "./assets/php.png";
import as from "./assets/as.png";
import mysql from "./assets/mysqll.png";
import graphql from "./assets/graphql.png";
import prisma from "./assets/prisma.png";
import "./CSS/skills.css";

function Skills() {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [hoveredDescription, setHoveredDescription] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    setIsTouch(checkTouch());
  }, []);

  const cards = [
    {
      img: javaa,
      title: "JavaScript",
      description:
        "Dynamic programming language for web development, enabling interactive and responsive user interfaces.",
    },
    {
      img: react,
      title: "React",
      description:
        "Popular JavaScript library for building user interfaces, focusing on component-based architecture.",
    },
    {
      img: nest,
      title: "NestJS",
      description:
        "Progressive Node.js framework for building scalable server-side applications with TypeScript.",
    },
    {
      img: php,
      title: "PHP",
      description:
        "Server-side scripting language designed for web development and creating dynamic web pages.",
    },
    {
      img: as,
      title: "Android Studio",
      description:
        "Integrated development environment for Android app development with powerful debugging tools.",
    },
    {
      img: javaaa,
      title: "Java",
      description:
        "Object-oriented programming language known for its portability and enterprise-level applications.",
    },
    {
      img: tailwind,
      title: "Tailwind CSS",
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes.",
    },
    {
      img: prisma,
      title: "Prisma ORM",
      description:
        "a modern ORM (Object-Relational Mapping) tool that makes working with databases in JavaScript and TypeScript easier, providing type safety and powerful database access.",
    },
    {
      img: graphql,
      title: "GraphQL",
      description:
        "A query language for APIs that lets clients request exactly the data they need, making data fetching more efficient and flexible.",
    },
    {
      img: mysql,
      title: "MySQL Database",
      description:
        "Relational database management system for storing, organizing, and retrieving structured data.",
    },
  ];

 
  const handleCardClick = (index, card) => {
    if (isTouch) {
      if (activeCard === index) {
        setActiveCard(null);
        setHoveredTitle("");
        setHoveredDescription("");
      } else {
        setActiveCard(index);
        setHoveredTitle(card.title);
        setHoveredDescription(card.description);
      }
    }
  };

  
  const handleMouseEnter = (index, card) => {
    if (!isTouch) {
      setHoveredTitle(card.title);
      setHoveredDescription(card.description);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setHoveredTitle("");
      setHoveredDescription("");
    }
  };

  return (
    <div className="skills">
      <div className="skills-wrapper">
        <div className="description-container">
          <h3 className="skill-title">{hoveredTitle || "Select a skill"}</h3>
          <p className="skill-description">{hoveredDescription}</p>
        </div>
        <div className="cards-container">
          {cards.map((card, index) => (
            <li
              className={`cards ${isTouch && activeCard === index ? "active" : ""}`}
              key={index}
              onClick={() => handleCardClick(index, card)}
              onMouseEnter={() => handleMouseEnter(index, card)}
              onMouseLeave={handleMouseLeave}
            >
              <span></span>
              <span></span>
              <span></span>
              <img src={card.img} alt={card.title} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
