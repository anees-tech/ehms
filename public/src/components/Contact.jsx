import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MiddleTicker from './MiddleTicker';
import ContactMiddleSections from './ContactSections/ContactMiddleSections';
import AboutHeroSection from './AboutSections/AboutHeroSection';

const Contact = () => {
  return (
    <div id='contact'>
      <Navbar />
      <AboutHeroSection img={'header-img-contact'} h2={'Contact Us'} />
      <MiddleTicker />
      <ContactMiddleSections />
      <Footer />
    </div>
  );
}

export default Contact