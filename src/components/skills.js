import React, { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills"); // Initialize activeTab state

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="sub-title">About Me</h1>
      <p>
        I am Final Year Computer Science and Engineering Student of IIT Jodhpur.
      </p>
      <div className="tab-titles">
        <p
          className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links ${
            activeTab === "education" ? "active-link" : ""
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </p>
        <p
          className={`tab-links ${
            activeTab === "experience" ? "active-link" : ""
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </p>
      </div>
      <div
        className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}
        id="skills"
      >
        <ul>
          <li>
            <span>Web Development</span>
            <br />
            Web app Development
          </li>
          <li>
            <span>ML and AI</span>
            <br />
            Computer Vision and other ML things
          </li>
        </ul>
      </div>
      <div
        className={`tab-contents ${
          activeTab === "education" ? "active-tab" : ""
        }`}
        id="education"
      >
        <ul>
          <li>
            <span>2020-Present</span>
            <br />
            Btech CSE IIT Jodhpur
          </li>
          <li>
            <span>2017-2019</span>
            <br />
            Parth School of Science and Competition, Vadodara.
          </li>
        </ul>
      </div>
      <div
        className={`tab-contents ${
          activeTab === "experience" ? "active-tab" : ""
        }`}
        id="experience"
      >
        <ul>
          <li>
            <span>May 2023-July 2023</span>
            <br />
            Summer Research Project
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
