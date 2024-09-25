import React from "react";

function Slider() {
  return (
    <div className="relative overflow-hidden bg-black py-2 px-4 h-28">
      {/* Fixed Background */}
      <div className="absolute inset-0 flex items-center bg-black"></div>
      
      {/* Sliding Text */}
      <div className="flex whitespace-nowrap animate-scroll text-[#1ecb15] md:mt-5 relative z-10 text-[30px]">
        {/* First set of text */}
        <div className="flex">
          {[
            "Minivans",
            "Exotic Cars",
            "Hatchback",
            "Sedan",
            "SUV",
            "EV",
            "Premium",
            "Pickup",
          ].map((category, index) => (
            <span key={index} className="relative mx-24"> {/* Adjust gap here */}
              {category}
              {index < 8 && (
                <span
                  className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-1.5 w-10 bg-[#444644]"
                  style={{ marginRight: "10rem" }}
                ></span>
              )}
            </span>
          ))}
        </div>
        
        {/* Second set of text (duplicate) */}
        <div className="flex">
          {[
            "Minivans",
            "Exotic Cars",
            "Hatchback",
            "Sedan",
            "SUV",
            "EV",
            "Premium",
            "Pickup",
          ].map((category, index) => (
            <span key={index} className="relative mx-24"> {/* Adjust gap here */}
              {category}
              {index < 8 && (
                <span
                  className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-1.5 w-10 bg-[#444644]"
                  style={{ marginRight: "10rem" }}
                ></span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
