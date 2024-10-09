import React from 'react';

const TraumaTherapySection = () => {
  return (
    <section className="bg-gray-50 w-full  py-12">
      <div className="contentDiv flex flex-col lg:flex-row items-center justify-between max-w-screen-xl h-[400px] mx-auto px-4 lg:px-8">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left px-4 lg:px-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Trauma-Focused Therapy
          </h2>
          <p className="text-gray-600 mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia.
          </p>
          <button className="bg-[#219EBC] flex items-center justify-between px-4 py-2 md:mt-6 sm:mt-4 mt-2 rounded-lg hover:text-black hover:bg-[#5ac3dd] transition duration-300 text-white">
            See More
          </button>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 w-full lg:flex hidden justify-center shadow-none lg:justify-end">
          <div className="relative w-full lg:w-4/5 px-10 select-none">
            {/* Main Image */}
            <img
              src="./assets/tharapy_IMG.webp"
              alt="Therapy"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            {/* Background Decorative Box */}
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 w-full h-full bg-blue-100 rounded-lg shadow-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraumaTherapySection;
