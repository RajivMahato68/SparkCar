import React from 'react';
import car1 from "../../assets/we.jpg";
import { FaGolfBallTee } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

function Advanture() {
  return (
    <div className="relative h-auto md:h-80 mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center h-[600px] md:h-full"
        style={{
          backgroundImage: `url(${car1})`,
          filter: 'brightness(50%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-32 pt-8 text-white">
        {/* Title Section */}
        <div className="w-full md:w-1/3 text-center md:text-left text-xl md:text-2xl font-bold mb-6 md:mb-0">
          Let Your Adventure Begin
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <GiTrophyCup className="text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white mb-4 md:mb-6" />
            <h1 className="mb-2 text-center md:text-left text-lg md:text-xl">First Class Services</h1>
            <p className="text-center md:text-left text-sm md:text-base">
              Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <FaRoad className="text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white mb-4 md:mb-6" />
            <h1 className="mb-2 text-center md:text-left text-lg md:text-xl">24/7 Customer Service</h1>
            <p className="text-center md:text-left text-sm md:text-base">
              Reliable support when you need it most, keeping you on the move with confidence and peace of mind.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <FaGolfBallTee className="text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white mb-4 md:mb-6" />
            <h1 className="mb-2 text-center md:text-left text-lg md:text-xl">Pick-Up & Drop-Off</h1>
            <p className="text-center md:text-left text-sm md:text-base">
              Enjoy pickup and drop-off services, adding an extra layer of ease to your car rental experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advanture;
