import React from "react";

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
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 4,
    },
    {
      img: "assets/patientProfile.png",
      id: 2,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 3,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 3,
    },
    {
      img: "assets/patientProfile.png",
      id: 4,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 4,
    },
    {
      img: "assets/patientProfile.png",
      patientsName: "Liam",
      id: 5,
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 9,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 4,
    },
    {
      img: "assets/patientProfile.png",
      id: 7,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 5,
    },
    {
      img: "assets/patientProfile.png",
      id: 8,
      patientsName: "Liam",
      review:
        "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Lorem Ipsug and typesetting industry",
      rating: 5,
    },
  ];

  return (
    <div id="testimonial">
      {/* Title */}
      <div className="text-4xl font-semibold text-gray-900 flex items-center justify-center pb-12">
        <h1>
          Patient's <span className="text-yellow-500">Review</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center bg-[#FC8602]">
        <div className="bg-[#FC8602] p-8 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {cardData.map((patient, index) => (
            <div
              key={index}
              className="bg-white h-fit w-full md:w-64 lg:w-60 xl:w-72 2xl:w-80 p-4 rounded-xl flex flex-col gap-6"
            >
              {/* User info */}
              <div className="flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/150?img=${patient.id}`}
                  alt="userImg"
                  className="h-12 w-12 rounded-full"
                />
                <h3 className="font-semibold text-sm">
                  {patient.patientsName}
                </h3>
              </div>

              {/* Review text */}
              <p className="text-sm text-[#757373] font-[Plus Jakarta Sans]">
                {patient.review}
              </p>

              {/* Star rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < patient.rating} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsReview;