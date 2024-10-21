import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import '../scss/HeroSection.scss'


const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToVision = (route, id) => {
    navigate(route);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <footer className="footer-bg text-white">
      <div className="footer-wrapper py-10">
        <div className="container mx-auto px-4 " data-aos="zoom-in-up ease-in-out">
          {/* First Row - Logo and Menu */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="h-20 w-full min-w-52"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-4 text-gray-100 mt-4 lg:mt-0 cursor-pointer">
              <h3
                onClick={() => handleScrollToVision("/", "home")}
                className="hover:text-gray-200"
              >
                {" "}
                Home{" "}
              </h3>
              <h3
                onClick={() => handleScrollToVision("/services", "service")}
                className="hover:text-gray-200"
              >
                {" "}
                Services{" "}
              </h3>
              <h3
                onClick={() => handleScrollToVision("/AboutUs", "aboutus")}
                className="hover:text-gray-200"
              >
                {" "}
                About Us{" "}
              </h3>
              <h3
                onClick={() => handleScrollToVision("/contactUs", "contact")}
                className="hover:text-gray-200"
              >
                {" "}
                Contact Us{" "}
              </h3>
            </nav>
          </div>

          {/* Second Row - Three sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-8">
            {/* Explore Links */}
            <div>
              <h3 className="font-semibold text-lg">Explore Links</h3>
              <ul className="mt-4 space-y-2 cursor-pointer">
                <li
                  onClick={() => handleScrollToVision("/aboutUs", "aboutCards")}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <h3>About Company</h3>
                </li>
                <li
                  onClick={() => handleScrollToVision("/services", "serviceGrid")}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <h3>Services Offered</h3>
                </li>
                <li
                  onClick={() => handleScrollToVision("/services", "testimonial")}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <h3>Our Testimonials</h3>
                </li>
                <li
                  onClick={() => handleScrollToVision("/aboutUs", "aboutCards")}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <h3>Our Vision</h3>
                </li>
                <li
                  onClick={() => handleScrollToVision("/aboutUs", "aboutCards")}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <h3>Our Mission</h3>
                </li>
                <li>
                  <Link
                    to={"/AboutUs"}
                    className="text-gray-300 hover:text-gray-100"
                  ></Link>
                </li>
              </ul>
            </div>

            {/* Get Support */}
            <div>
              <h3 className="font-semibold text-lg">Get Support</h3>
              <ul className="mt-4 space-y-2 cursor-pointer">
                <li>
                  <h3 onClick={() => handleScrollToVision("/AboutUs", "aboutus")} className="text-gray-300 hover:text-gray-100"> About </h3>
                </li>
                <li>
                  <h3 onClick={() => handleScrollToVision("/contactUs", "contact")} className="text-gray-300 hover:text-gray-100"> Contact </h3>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>contact@essentialmhs.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt />
                  <span>(+88) 111-222-333</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt />
                  <span>Hameed Latif Hospital, Lahore</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Row - Bottom Section with Copyright and Social Icons */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-10 space-y-4 lg:space-y-0 border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-300">
              &copy; 2024 All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-100">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-100">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-100">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-100">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
