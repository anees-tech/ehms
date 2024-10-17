import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div data-aos="fade-up">
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default Header;
