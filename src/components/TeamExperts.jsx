import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ayesha Shahid Sheikh",
      role: "Psychologist",
      imageSrc: "assets/doctor.webp",
      Profile1: "https://www.marham.pk/online-consultation/psychologist/lahore/ayesha-shahid-sheikh-5169",
      Profile2: "https://oladoc.com/pakistan/lahore/dr/psychologist/ayesha-shahid-sheikh/179709",
    },
    {
      name: "Dr. Fatima Bukharie",
      role: "Psychiatrist",
      imageSrc: "assets/doctor.webp",
      Profile1: "https://www.marham.pk/online-consultation/psychiatrist/lahore/dr-fatima-bukharie-13240",
      Profile2: "https://oladoc.com/pakistan/lahore/dr/psychiatrist/fatima-bukharie/327742",
    },
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
      Profile1: "",
      Profile2: "",
    },
    {
      name: "Patrik Cortez",
      role: "Doctor",
      imageSrc: "assets/doctor.webp",
      Profile1: "",
      Profile2: "",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        {/* Section Title */}
        <div data-aos="slide-down" className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our <span className="text-yellow-500">Expert Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-mono">
            Our team of highly qualified mental health professionals is
            dedicated to providing exceptional care in psychology and
            psychiatry. Each member brings years of experience and a
            compassionate approach, ensuring every client receives personalized
            attention suited to their individual needs.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              data-aos={
                index % 4 === 0 || index % 4 === 1 ? "fade-right" : "fade-left"
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
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-2 text-[#FB8501] text-base">{member.role}</p>

              {/* button div */}
              <div className="pt-4 px-4 cursor-pointer flex gap-2 items-center justify-center">
                <button className="px-4 py-2 bg-[#FB8501] rounded-lg hover:bg-[#fb8601d7] hover:text-white hover:scale-105 transition-all ease-linear"><a href={member.Profile1}target="_blank" rel="noopener noreferrer" >MARHAM</a></button>
                <button className="px-4 py-2 bg-[#FB8501] rounded-lg hover:bg-[#fb8601d7] hover:text-white hover:scale-105 transition-all ease-linear"><a href={member.Profile2}target="_blank" rel="noopener noreferrer" >OLADOC</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
