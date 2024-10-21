import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ imgSrc, title, para, index, animation, serviceLink }) => {
  // Scroll to the top when the link is clicked
  const navigate = useNavigate();

  const handleScrollToTop = (route, id) => {
    navigate(route);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div
      data-aos={animation}
      className="relative flex h-[28rem] w-72 lg:w-76 flex-col rounded-xl bg-white bg-clip-border border text-gray-700 shadow-md mb-6 self-start hover:shadow-lg hover:shadow-[#219ebc] hover:scale-105 transition ease-in-out hover:duration-500"
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="card"
          className="relative object-cover mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 hover:after:bggray-400 hover:after:opacity-50 hover:after:z-30"
        />
      ) : null}
      <div className="p-6">
        <h5
          className={
            index === 0
              ? "mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
              : "mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          }
        >
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {para}
        </p>
      </div>
      <div className="p-6 pt-0">
        <h3
          onClick={() => {
            handleScrollToTop(`/service/${serviceLink}`, "subService");
          }}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#219ebc] border border-1 border-blue-300 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </h3>
      </div>
    </div>
  );
};

export default Card;
