import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

function Contracts() {
  return (
    <>
      <div className="relative flex flex-col md:flex-row  justify-between md:items-start mt-32 w-full h-auto bg-[#199e1c] px-4 md:px-36 py-8 md:py-20 text-white">
        {/* Left section: Information text */}
        <div className="w-full md:w-1/2 mb-8 md:ml-0 ml-5 md:mb-0 md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-[1.25]">
        Call us for further information. Customer care is here to help you anytime.
        </h1>
      </div>

        {/* Right section: Contact info */}
        <div className="w-full md:w-1/2 md:ml-0 ml-5 md:text-right">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Call Us Now <br />
            <span className="text-xl md:text-3xl lg:text-4xl">01-5971616</span>
          </h1>
          <button className='bg-[#1ecb15] text-white py-2 px-4 rounded font-bold hover:shadow-2xl hover:shadow-white'>
            Contact Us
          </button>
        </div>

        {/* Phone icon positioned absolutely to the far right */}
        <div className="absolute md:ml-0 ml-5 md:right-36 md:top-14 top-[55%] transform -translate-y-1/2">
          <FaPhoneAlt className="text-3xl md:text-5xl text-white mb-10" />
        </div>
      </div>
    </>
  );
}

export default Contracts;
