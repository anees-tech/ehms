import React from "react";
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
  return (
    <div id="serviceGrid">
      <h1 data-aos="zoom-in" className="text-center text-4xl py-16 font-bold">
        Our <span className="text-[#FC8602]">Services</span>
      </h1>
      <div className="flex px-0 py-8 items-center justify-center">
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-8">
          {/* First Card from ServicesData */}
          {ServicesData.map((service, index) => (
            <Card
              key={`service-${index}`}
              title={service.title}
              para={service.para}
              index={index}
              animation="fade-down" // You can assign any animation here
            />
          ))}

          {/* Cards from SubServiceAPI */}
          {SubServiceAPI.map((item, index) => {
            const limitedPara = (wordCount) =>
              limitWords(item.serviceDetail, wordCount);
            const limitedTitle = (wordCount) => limitWords(item.servicesTitle, wordCount);
            return (
              <Card
                key={`subservice-${index}`} // Unique key for each card from SubServiceAPI
                imgSrc={item.mainImg}
                title={limitedTitle(2)} // Adjusted word count for the first card
                para={limitedPara(10)} // Adjusted word count for the first card
                index={index + 1} // Offset index to account for the manual card
                serviceLink={item.servicesName}
                animation={
                  index % 3 === 0
                    ? "fade-up"
                    : index % 3 === 1
                    ? "fade-down"
                    : index % 2 === 0 
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
