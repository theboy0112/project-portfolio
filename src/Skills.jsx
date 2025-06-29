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
import bs from "./assets/bs.png";
import { useNavigate } from "react-router-dom";
function Skills() {
  const navigate = useNavigate();
  return (
    <div className="skills-container">
       <div style={{}} className="div-home">
      <button
        onClick={() => navigate(`/`)}
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          fontSize: "30px",
          backgroundColor: "transparent",
          border: "none",
          color: "#1b3356",
          cursor: "pointer",
        }}
      >
        Home
      </button>
      <card className="card">
        {" "}
        <img src={javaaa} />
      </card>
      <card className="card">
        {" "}
        <img src={javaa} />
      </card>
      <card className="card">
        {" "}
        <img src={react} />
      </card>
      <card className="card">
        {" "}
        <img src={nest} />
      </card>
      <card className="card">
        {" "}
        <img src={php} />
      </card>
      <br></br>
      <br></br>
      <br></br>
      <card className="card">
        {" "}
        <img src={node} />
      </card>
      <card className="card">
        {" "}
        <img src={express} />
      </card>
      <card className="card">
        {" "}
        <img src={as} />
      </card>
      <card className="card">
        {" "}
        <img src={bs} />
      </card>
      <card className="card">
        {" "}
        <img src={tailwind} />
      </card>
    </div>
    </div>
  );
}

export default Skills;
