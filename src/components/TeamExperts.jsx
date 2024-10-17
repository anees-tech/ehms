import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
    },
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
    },
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
    },
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="slide-down" className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our <span className="text-yellow-500">Expert Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-mono">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC  simply random text. It has roots in a piece of classical Latin literature from 45 BC lorem
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
            data-aos={
              (index % 4 === 0 || index % 4 === 1) ? "fade-right" : 
              "fade-left"
            }
            
              key={index}
              className="bg-white rounded-lg shadow-md text-center py-5 transition-transform duration-200 transform hover:scale-105"
            >
              <div className="relative overflow-hidden pb-[100%] mb-6 rounded-lg bg-blue-100">
                <img
                  className="absolute h-full w-full object-cover rounded-lg"
                  src={member.imageSrc}
                  alt={member.name}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-2 text-[#FB8501] text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;