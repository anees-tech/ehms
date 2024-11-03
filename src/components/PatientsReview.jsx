import { useState, useEffect } from "react";


const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill={filled ? "gold" : "none"}
    stroke="gold"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PatientsReview = () => {
  const cardData = [
    {
      img: "assets/patientProfile.png",
      id: 1,
      patientsName: "A.Q - 10/03/2022",
      review: "Yes she is a good person I loved the way she consulted my issue",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 2,
      patientsName: "M - 11/07/2020",
      review:
        "When I booked the appointment I was a little apprehensive because I was not sure if a young therapist would understand my issues. But Dr Ayesha was able to put me at ease within the first two minutes of the session. She got to the root of my condition quickly and her prescribed mental exercises have already started to make me feel better. I highly recommend Dr Ayesha Shahid! ",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 3,
      patientsName: "m - 07/11/2019",
      review:
        "Very nice experience. Dr Ayesha listens very carefuly to patient's problem and gives very good solution and techniques to handle the problems we face. Overall very satisfied",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 4,
      patientsName: "A.Y - 24/04/2020",
      review:
        "This is my first session with her, it was a nice experience. She understood my issues and explained it very nicely and in detail. A good mentor to have. !!",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      patientsName: "a.L - 31/01/2024",
      id: 5,
      review:
        "Very good experience. Doctor listened to me and helped me during my session. Very helpful and understanding.",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 6,
      patientsName: "A.A - 05/02/2021",
      review:
        "Totally satisfied with DR Fatima. Dr Fatima is very nice ,humble and down to earth person I know. She listens to her patient properly and her advise is always very clear and polite. Few months back i was in very dark phase of my life but Alhamdulillah after visiting her and following her prescription my life is changed. Totally recommended MashAllah",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 7,
      patientsName: "N.A - 25/11/2020",
      review:
        "Most kind and humble personality. She is always available for follow up . The best part of her expertise is use of less medicine . Highly recommended",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 8,
      patientsName: "N.A - 25/11/2020",
      review:
        "Most kind and humble personality . Always available for follow up . Best treatment i got her for a problem facing for last 3 years. Minimum prescription of medicines.",
      rating: 5,
    },
  ];

  const limitWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const [cardLimit, setCardLimit] = useState(cardData.length);
  useEffect(() => {
    // Function to update screen size
    const handleResize = () => {
      const mobileView = window.innerWidth < 480; // Define mobile breakpoint
      setCardLimit(mobileView ? 4 : cardData.length); // Show only 3 cards on mobile
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  return (
    <div id="testimonial">
      {/* Title */}
      <div
        data-aos="zoom-out"
        className="text-4xl font-semibold text-gray-900 flex items-center justify-center pb-12"
      >
        <h1>
          Patient's <span className="text-yellow-500">Review</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center bg-[#FC8602]">
        <div className="bg-[#FC8602] p-8 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {cardData.slice(0, cardLimit).map((patient, index) => {
            const limitedPara = (wordCount) =>
              limitWords(patient.review, wordCount);
            return (
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                key={index}
                className="bg-white h-60 w-full md:w-64 lg:w-60 xl:w-72 2xl:w-80 p-4 rounded-xl flex flex-col gap-6"
              >
                {/* User info */}
                <div className="flex items-center gap-4">
                  <img
                    src={`assets/reviews.png`}
                    alt="userImg"
                    className="h-12 w-12 rounded-full"
                  />
                  <h3 className="font-semibold text-sm">
                    {patient.patientsName}
                  </h3>
                </div>

                {/* Review text */}
                <p className="text-sm text-[#757373] font-[Plus Jakarta Sans]">
                  {limitedPara(20)}
                </p>

                {/* Star rating */}
                  <div className="flex gap-1 bottom-0 top-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < patient.rating} />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center bg-[#FC8602] pb-8">
          <a
            href="https://www.marham.pk/doctors/lahore/psychologist/ayesha-shahid-sheikh/reviews"
            target="__blank__"
            className="bg-[#ffee0070] shadow-lg text-white px-4 py-2 rounded-md"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PatientsReview;
