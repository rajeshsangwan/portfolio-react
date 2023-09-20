import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
// import Skills from "../components/skills";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am FrontEnd Developer" />
      <AboutContent />
      {/* <Skills /> */}
      <Footer />
    </div>
  );
};

export default About;
