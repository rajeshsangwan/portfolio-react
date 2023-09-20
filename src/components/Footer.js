import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                isize={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              A-165, Taksh Divine, Nr. Nijanand Aashram, NH-8, Ankhol, Vadoara.
              Pincode : 390019
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                isize={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-9624346465
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                isize={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sangwan.1@iitj.ac.in
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a final year Computer Science and Engineering student at the
            prestigious Indian Institute of Technology (IIT) Jodhpur, where my
            passion for technology and innovation has flourished. With a diverse
            set of skills and a thirst for knowledge, I am on a relentless
            pursuit of excellence in the world of technology.
          </p>
          <div className="social">
            <FaInstagram
              isize={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              isize={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              isize={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              isize={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
