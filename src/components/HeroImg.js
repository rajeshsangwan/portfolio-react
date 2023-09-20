import "./HeroImg.css";
import React from "react";
import introImg from "../assets/mask.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} alt="" className="intro-img" />
      </div>
      <div className="content">
        <p>Hi, I'm a Frontend Developer</p>
        <h1>Rajesh Sangwan</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link className="btn btn-light" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
