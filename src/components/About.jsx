import React from "react";
import Navbar from "./Navbar";
import AboutHeroSection from "./AboutSections/AboutHeroSection";
import AboutUsCards from "./AboutSections/AboutUsCards";
import Footer from "./Footer";
import MiddleTicker from "./MiddleTicker";
import Team from "./TeamExperts";
const About = () => {
  return (
    <div id="aboutus">
      <Navbar />
      <AboutHeroSection img={"about_hero_bg"} h2={"About Us"} />
      <MiddleTicker />
      <AboutUsCards />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
