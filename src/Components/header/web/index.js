import React from "react";
import "./web.css";
const Web = () => {
  return (
    <div className="web">
      <div className="web_option">
        <a href="#about">
          <i class="material-icons option_icon">account_circle</i>About
        </a>
      </div>
     

      <div className="web_option">
        <a href="#skills">
          <i class="material-icons option_icon">laptop</i>Skills
        </a>
      </div>

      <div className="web_option">
        <a href="#projects">
          <i class="material-icons option_icon">widgets</i>Projects
        </a>
      </div>

      <div className="web_option">
        <a href="#contact">
          <i class="material-icons option_icon">call</i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
