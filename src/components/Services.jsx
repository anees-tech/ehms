import React from "react";
import Navbar from "./Navbar";
import MiddleTicker from "./MiddleTicker";
import ServicesGrid from "./homepageSections/ServicesGrid";
import PatientsReview from "./PatientsReview";
import Footer from "./Footer";
import LocationComponent from "./LocationComponent";
import Hero from "./AboutSections/Hero";

const Services = () => {
  let h2 = "Services";

  return (
    <div id="service">
      <div data-aos="fade-up">
        <Navbar />
        <Hero />
      </div>
      <MiddleTicker />
      <ServicesGrid />
      <PatientsReview />
      <LocationComponent />
      <Footer />
    </div>
  );
};

export default Services;
