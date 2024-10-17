import React from "react";
import Card from "./Card";

const ServicesData = [
  {
    title: "Therapy Center and Counselling Services",
    para: "Essential Mental Health Services is a multidisciplinary therapy center with a team of qualified and dedicated experts. We offer a wide range of services, across the age spectrum to meet the needs of adults, seniors, and pediatric patients, so you have to look no further.",
  },
  {
    img: "assets/card.webp",
    title: "Psychological Services",
    para: "Psychological services encompass a wide range of therapeutic interventions designed to support individuals in managing emotional, behavioral, and mental health issues. These services aim to promote mental well-being and personal growth by addressing concerns such as stress, anxiety, depression, trauma, and interpersonal conflicts. With trained professionals offering individualized care, psychological services can be transformative, guiding individuals through challenges with compassion and expertise. A core element of psychological services is providing a safe, non-judgmental space where clients can openly express their feelings, fears, and concerns. These services include various therapeutic approaches, such as cognitive-behavioral therapy (CBT), psychoanalysis, and mindfulness practices, tailored to the specific needs of each individual. Through these services, clients gain insight into their thoughts and behaviors, empowering them to lead healthier, more balanced lives.",
  },
  {
    img: "assets/card.webp",
    title: "Speech-Language Therapy",
    para: "Speech-language therapy focuses on helping individuals who have difficulties with communication, speech, or language. Therapists work with children and adults to improve their ability to express themselves, understand language, and engage in effective communication. This therapy also addresses speech-related challenges such as stuttering, articulation issues, or voice disorders. Through tailored exercises and techniques, speech-language therapy empowers individuals to enhance their communication skills, enabling them to connect more confidently and effectively with others in daily life.",
  },
  {
    img: "assets/card.webp",
    title: "Career Counseling",
    para: "Career counseling helps individuals make informed decisions about their professional lives. It involves exploring career options, identifying skills and interests, and setting realistic goals for career development. Career counselors provide guidance on job searching, interview techniques, and educational paths to ensure that individuals are equipped to pursue fulfilling careers. This service is essential for those transitioning between careers or seeking to advance in their current roles.",
  },
  {
    img: "assets/card.webp",
    title: "Addiction / Rehab Counseling",
    para: "Addiction and rehab counseling provides support to individuals struggling with substance abuse and addiction. Counselors work closely with clients to understand the root causes of addiction, develop coping mechanisms, and create recovery plans. This counseling often includes individual therapy, group sessions, and education on relapse prevention. The goal is to help individuals regain control of their lives and maintain long-term sobriety.",
  },
  {
    img: "assets/card.webp",
    title: "Marital Counseling",
    para: "Marital counseling focuses on resolving conflicts and improving communication between partners in a relationship. It helps couples work through issues such as trust, intimacy, and compatibility. By fostering open dialogue and providing tools for conflict resolution, marital counseling strengthens the foundation of a relationship, enabling couples to build a healthier and more fulfilling partnership.",
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
      <h1 data-aos="zoom-in" className="text-center text-4xl py-16 font-bold ">Our <span className="text-[#FC8602]">Services</span></h1>
      <div className="flex px-0 py-8 items-center justify-center">
        <div className=" grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-8">
          {ServicesData.map((item, index) => {
            // Limiting the "para" prop to 41 words for the first card and 10 words for the rest
            let wordCount;
            const limitedPara = (wordCount) => limitWords(item.para, wordCount);
            return (
              <Card
                key={index}
                imgSrc={item.img}
                title={item.title}
                para={limitedPara(index === 0 ? 41 : 10)}
                index={index}
                animation={
                  (index % 3 === 0) ? "fade-right" : 
                  (index % 3 === 1) ? "fade-down" : 
                  "fade-left"
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
