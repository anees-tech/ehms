import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../scss/HeroSection.scss'
const HeroSection = () => {
  return (
    <header>
      <div className="hero_section">
        <div className="hero_BG_IMG h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]">
          {/* <img src="./assets/heroIMG.png" alt="" /> */}

        </div>
        <div className="heroContent flex flex-col justify-center items-start h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] 2xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 " >
          <div className="heroData max-w-screen-xl mx-auto">
            <h1 className='text-2xl md:text-5xl text-white font-bold'>
              <span className='text-[#E7AE19]'>Professional <br /></span>
              Psychological Services
            </h1>
            <p className='text-white text-md md:text-lg mt-5 2xl:mt-8 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde praesentium velit possimus accusamus ab incidunt quas? Unde, ipsam sit!</p>
            <button className='bg-[#219EBC] flex items-center justify-between px-4 py-2 md:mt-6 sm:mt-4 mt-2 rounded-lg hover:text-black hover:bg-[#5ac3dd] transition duration-300 text-white '>Our Services <span><FaArrowRight className='ml-2 mt-0.5' /></span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default HeroSection