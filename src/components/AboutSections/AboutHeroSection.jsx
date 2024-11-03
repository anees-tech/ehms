import React from 'react';
import '../../scss/HeroSection.scss';

function AboutHeroSection({ img, h2 }) {
  return (
    <div className="AboutUsHero relative">
      <div
        className={`${img} h-[300px] sm:h-[400px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]`}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </div>
      <div className="about_Hero_Content for_contact flex flex-col justify-center items-center h-[300px] sm:h-[400px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 2xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 relative z-10">
        <h2 className='text-white text-2xl md:text-5xl font-bold'>{h2}</h2>
      </div>
    </div>
  );
}

export default AboutHeroSection;
