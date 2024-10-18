import React from 'react';

const ContactForm = () => {
  return (
    <div id='form' className="p-4 sm:p-8 md:p-12 lg:p-20 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row max-w-4xl w-full gap-8 lg:gap-20 rounded-lg">
        {/* Left Section - Form */}
        <div data-aos="fade-right" className="w-full lg:w-1/2 p-6 lg:p-8 bg-white rounded-md shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Write Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email address</label>
              <input
                type="email"
                placeholder="Write Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                placeholder="Write Here"
                className="w-full h-28 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 bg-[#219ebc] text-white font-semibold rounded-lg hover:bg-[#5ac3dd] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send <span className="ml-2">➤</span>
            </button>
          </form>
        </div>
        {/* Right Section - Info */}
        <div data-aos="fade-left" className="w-full lg:w-1/2 bg-orange-500 p-6 lg:p-8 shadow-2xl flex rounded-md flex-col justify-center items-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Can we help you?</h2>
          <p className="text-center mb-6">
            We're happy to answer any questions you may have! Please fill out the support form below and a member of our support staff will respond as soon as possible.
          </p>
          <div className="letterBoxImageCircle bg-orange-300 scale-90 sm:scale-100 lg:scale-110 p-8 sm:p-10 rounded-full">
            <img src="./assets/letterBox.webp" alt="Letterbox" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;