import React from "react";
import Header from "./Header";
import AboutHeroSection from "./AboutSections/AboutHeroSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DoctorProfile = ({ doctor }) => {
  return (
    <div id="dactarSaabbb">
    <Navbar/>
    <AboutHeroSection img={"team_bg"} h2={doctor.name}/>
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg">
      {/* Doctor's Image */}
      <div className="flex flex-col items-center mb-8">
        <img
          className="w-48 h-48 rounded-full object-cover mb-4"
          src={`${process.env.PUBLIC_URL}/${doctor.imageSrc}`}
          alt={doctor.name}
        />
        <h2 className="text-3xl font-semibold text-gray-800">{doctor.name}</h2>
        <p className="text-lg text-[#FB8501]">{doctor.role}</p>
      </div>

      {/* Doctor's Info */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Experience:</h3>
        <p className="text-gray-700">{doctor.experience}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Education:</h3>
        <p className="text-gray-700">{doctor.education}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Availability:</h3>
        <p className="text-gray-700">{doctor.availability}</p>
      </div>

      {/* External Profiles */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-2">Online Profiles:</h3>
        <div className="flex gap-4">
          <a
            href={doctor.Profile1}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FB8501] text-white rounded-lg hover:bg-[#fb8601d7]"
          >
            Marham Profile
          </a>
          <a
            href={doctor.Profile2}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FB8501] text-white rounded-lg hover:bg-[#fb8601d7]"
          >
            Oladoc Profile
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DoctorProfile;
