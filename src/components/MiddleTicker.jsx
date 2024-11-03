import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MiddleTicker = () => {
  const tickerItems = [
    {
      icon: <FaPhoneAlt />,
      text: 'Phone',
      details: '(+92) 111-222-333',
    },
    {
      icon: <FaEnvelope />,
      text: 'Email',
      details: 'contact@essentialmhs.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Location',
      details: 'Hameed Latif Hospital, Lahore',
    },
  ];

  return (
    <section data-aos="zoom-out" className="py-12">
      <div className="max-w-6xl mx-auto flex justify-center px-4 md:px-0">
        {/* Responsive adjustments */}
        <div className="w-auto lg:w-auto bg-[#219dbc27] rounded-lg shadow-md py-4 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 md:space-x-6  justify-start items-start">
          {tickerItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-cyan-600 text-white p-3 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-500">
                    {item.text}
                  </p>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MiddleTicker;
