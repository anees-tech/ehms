import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubServiceAPI from "../SubServiceAPI"
import { Link } from "react-router-dom";

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="w-full mx-auto  px-0" draggable="false">
      <Slider {...settings}>

        {SubServiceAPI.map((item, index) => {
          return (
            <div key={index} className="relative">
            <img
              src={item.mainImg}
              alt="Sub Services Image"
              className="w-full h-[75svh] object-cover rounded-lg left-0 top-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-2 text-center">{item.servicesTitle}</h2>
              <p className="text-lg w-[70%] text-center">{item.serviceDetail}</p>
              <Link
                to={item.servicePath}
                // target="_blank"
                // rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-orange-500 rounded-full text-white font-semibold"
              >
                Visit Service
              </Link>
            </div>
          </div>
          )
        } )}

      </Slider>
    </div>
  );
};

export default Hero;
