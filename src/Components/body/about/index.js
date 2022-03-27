import React from "react";
import Separator from "../common/separator";
import SocialContact from "../common/social_contact";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_top">
        <div className="about_info">
          Hi 👋, <br></br>
          I'am <br></br>
          <span className="info_name">Abhishek Kasera</span>
          <br></br>
          Full Stack Developer
        </div>

        <div className="about_photo">
          <img
            src={require("../../../profile/resumepic.png")}
            className="picture"
          ></img>
        </div>
      </div>
      <div className="test"></div>
      <div className="aboutme">
        <br></br>
        <Separator />
        <h2>About</h2>

        
          A Passionate aspiring Full Stack Developer skilled in MERN stack,
          moulded and shaped by Masai school’s intensive and immersive learning.
          Look forward to joining a company where I will be able to contribute
          towards individual and company growth.
        
      </div>
      <br></br>
      <SocialContact />
    </div>
  );
};

export default About;
