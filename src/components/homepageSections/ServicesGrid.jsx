import React, { useState, useEffect } from "react";
import Card from "./Card";
import SubServiceAPI from "../SubServiceAPI";

const ServicesData = [
  {
    title: "Therapy Center and Counselling Services",
    para: "Essential Mental Health Services is a multidisciplinary therapy center with a team of qualified and dedicated experts. We offer a wide range of services, across the age spectrum to meet the needs of adults, seniors, and pediatric patients, so you have to look no further.",
  },
];

const limitWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const ServicesGrid = () => {
  const [cardLimit, setCardLimit] = useState(SubServiceAPI.length);

  useEffect(() => {
    // Function to update screen size
    const handleResize = () => {
      const mobileView = window.innerWidth < 480; // Define mobile breakpoint
      setCardLimit(mobileView ? 3 : SubServiceAPI.length); // Show only 3 cards on mobile
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  return (
    <div id="serviceGrid">
      <h1 data-aos="zoom-in" className="text-center text-4xl py-16 font-bold">
        Our <span className="text-[#FC8602]">Services</span>
      </h1>
      <div className="flex px-0 py-8 items-center justify-center">
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-8">
          {/* First Card from ServicesData */}
          {ServicesData.map((service, index) => {
            const limitedPara = (wordCount) => limitWords(service.para, wordCount);
            return (
              <Card
                key={`service-${index}`}
                title={service.title}
                para={limitedPara(41)}
                index={index}
                animation="fade-down" 
              />
            );
          })}

          {/* Limited Cards from SubServiceAPI based on screen size */}
          {SubServiceAPI.slice(0, cardLimit).map((item, index) => {
            const limitedPara = (wordCount) => limitWords(item.serviceDetail, wordCount);
            const limitedTitle = (wordCount) => limitWords(item.servicesTitle, wordCount);
            return (
              <Card
                key={`subservice-${index}`}
                imgSrc={item.mainImg}
                title={limitedTitle(2)}
                para={limitedPara(10)}
                index={index + 1}
                serviceLink={item.servicesName}
                animation={
                  index % 3 === 0
                    ? "fade-up"
                    : index % 3 === 1
                    ? "fade-down"
                    : "fade-down"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
