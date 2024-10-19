import React from "react";

const AboutUsCards = () => {
  const cardsList = [
    {
      title: "Our",
      span: "Vision",
      content:
        "At 'ESSNTIAL MENTAL HEALTH SERVICES', we strive to create a world where mental well-being is accessible to all. We envision a future where individuals can lead fulfilling lives through personalized, effective, and compassionate mental health care. Our focus is to empower every individual to overcome challenges and live a balanced, healthy life.",
    },
    {
      title: "Our",
      span: "Mission",
      content:
        "Our mission is to provide comprehensive mental health services that cater to the diverse needs of our clients. From psychological assessments to psychiatric treatments, we aim to deliver evidence-based care in a safe, supportive environment. We are dedicated to helping people of all ages overcome mental health challenges through innovative therapies, fostering long-term healing and resilience.",
    },
    {
      title: "Our",
      span: "Values",
      content:
        "We believe in the values of empathy, confidentiality, and excellence in care. At [Your Clinic's Name], we prioritize the well-being of our clients above all. Our approach is rooted in respect for every individual's unique experience, and we are committed to offering professional, compassionate services that help clients achieve mental health stability and overall wellness.",
    },
  ];

  return (
    <section className="py-10" id="aboutCards">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {cardsList.map((item, index) => {
          return (
            <>
              <div data-aos={ index % 2 === 0? "fade-up": "fade-down" } className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4">
                  {item.title}{" "}
                  <span className="text-[#FB8501]">{item.span}</span>
                </h2>
                <p className="text-gray-600 mb-6">{item.content}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUsCards;
