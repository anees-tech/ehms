import { useNavigate } from "react-router-dom";

const TraumaTherapySection = () => {
  const navigate = useNavigate();

  const handleScrollToTop = (route, id) => {
    navigate(route);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <section className="bg-gray-50 w-full py-12">
      <div className="contentDiv flex flex-col lg:flex-row items-center justify-between max-w-screen-xl h-[400px] mx-auto px-4 lg:px-8">
        {/* Left Content */}
        <div
          data-aos="slide-right"
          className="lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left px-4 lg:px-0"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Trauma-Focused Therapy
          </h2>
          <p className="text-gray-600">
            Trauma can deeply affect your mental health, leading to challenges
            such as anxiety, depression, or post-traumatic stress disorder
            (PTSD). We offer Trauma-Focused Therapy to help you process and heal
            from these difficult experiences. Our therapy sessions are designed
            to provide a safe, supportive environment where you can work through
            trauma at your own pace.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <button
              onClick={() => {
                handleScrollToTop("/services", "service");
              }}
              className="bg-[#219EBC] w-fit px-4 py-2 md:mt-6 sm:mt-4 mt-2 rounded-lg hover:text-black hover:bg-[#5ac3dd] transition duration-300 text-white"
            >
              See More
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div
          data-aos="slide-left"
          className="lg:w-1/2 w-full lg:flex hidden justify-center shadow-none lg:justify-end"
        >
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
