import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#219EBC] text-white py-10 " >
      <div className="container mx-auto px-4 ">
        {/* First Row - Logo and Menu */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-black">Logo</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4 text-gray-100 mt-4 lg:mt-0">
            <a href="#home" className="hover:text-gray-200">Home</a>
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#about-us" className="hover:text-gray-200">About Us</a>
            <a href="#contact-us" className="hover:text-gray-200">Contact Us</a>
          </nav>
        </div>

        {/* Second Row - Three sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-8">
          {/* Explore Links */}
          <div>
            <h3 className="font-semibold text-lg">Explore Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about-company" className="text-gray-300 hover:text-gray-100">About Company</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-gray-100">Latest Projects</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-gray-100">Latest Blog</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gray-100">Our Testimonials</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-gray-100">Our Mission</a></li>
            </ul>
          </div>

          {/* Get Support */}
          <div>
            <h3 className="font-semibold text-lg">Get Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about-support" className="text-gray-300 hover:text-gray-100">About</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-gray-100">How it Works</a></li>
              <li><a href="#knowledge-hub" className="text-gray-300 hover:text-gray-100">Knowledge Hub</a></li>
              <li><a href="#success-stories" className="text-gray-300 hover:text-gray-100">Success Stories</a></li>
              <li><a href="#contact-support" className="text-gray-300 hover:text-gray-100">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>donation@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>(+88) 111-222-333</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Tropical Cyclone, Volcano</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Row - Bottom Section with Copyright and Social Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 space-y-4 lg:space-y-0 border-t border-gray-300 pt-6">
          <p className="text-sm text-gray-300">&copy; 2024 All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-100"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-100"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-100"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-100"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
