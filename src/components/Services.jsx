import React from 'react'
import Navbar from './Navbar';
import AboutHeroSection from './AboutSections/AboutHeroSection';
import MiddleTicker from './MiddleTicker';
import ServicesGrid from './homepageSections/ServicesGrid';
import PatientsReview from './PatientsReview';
import Footer from './Footer';
import LocationComponent from './LocationComponent';


const Services = () => {

  let h2 = "Services"
  
  return (
    <div>
      <Navbar />
      <AboutHeroSection img={'contact_Hero_bg'} h2={h2}/>
      <MiddleTicker/>
      <ServicesGrid/>
      <PatientsReview/>
      <LocationComponent/>
      <Footer/>
    </div>
  );
}

export default Services