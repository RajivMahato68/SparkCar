import React from 'react';
import { useNavigate } from 'react-router-dom';
import car1 from "../../assets/we.jpg";

function FirstSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <>
      <div
        className="relative bg-cover h-screen md:h-96 object-cover"
        style={{
          backgroundImage: `url(${car1})`,
        }}
      >
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="w-full px-6 md:w-3/4 lg:w-1/2 text-center pt-16">
            <button
              onClick={handleButtonClick}
              className="text-white bg-[#0caa4b] w-full sm:w-64 h-14 text-lg sm:text-2xl font-bold uppercase py-2"
            >
              Hire a Driver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
