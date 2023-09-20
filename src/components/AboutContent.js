import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/ReactJS.png";
import about2 from "../assets/reactjs.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am react front-end developer. I create responsive secure websites.{" "}
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={about2} className="img" />
          </div>
          {/* <div className="img-stack down">
            <img src={about1} className="img" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
