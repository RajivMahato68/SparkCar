import React from 'react';
import { FaCar } from "react-icons/fa";

function WhyRent() {
  return (
    <>
      <div>
        {/* Title Section */}
        <div className='text-center pt-5'>
          <h1 className='uppercase text-[28px] md:text-[35px] font-semibold text-[#0caa4b]'>
            Why rent from Spark Car?
          </h1>
          <h2 className='text-[20px] md:text-[30px] font-normal'>
            Trusted by 200+ Corporate Clients All Across Nepal
          </h2>
        </div>

        {/* Content Section */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-8 md:px-24 py-10 space-y-8 md:space-y-0'>
          {/* Item 1 */}
          <div className='w-full md:w-auto flex flex-col justify-center items-center text-center'>
            <FaCar className='text-5xl md:text-7xl lg:text-9xl text-[#0caa4b]' />
            <h1 className='text-[20px] md:text-[24px] font-medium text-[#000000] mt-4'>
              Well-maintained Vehicles
            </h1>
            <p className='text-[14px] md:text-[16px] font-normal text-[#666b7f] pt-3 px-4'>
              Experience corporate car rentals with perfectly maintained vehicles for seamless and punctual travel.
            </p>
          </div>

          {/* Item 2 */}
          <div className='w-auto md:w-auto flex flex-col justify-center items-center text-center'>
            <FaCar className='text-5xl md:text-7xl lg:text-9xl text-[#0caa4b]' />
            <h1 className='text-[20px] md:text-[24px] font-medium text-[#000000] mt-4'>
              Flexible Fleet Rental Duration
            </h1>
            <p className='text-[14px] md:text-[16px] font-normal text-[#666b7f] pt-3 px-4'>
              Our fleet rental service offers flexibility on an hourly, daily, monthly, and annual basis to cater to your diverse corporate needs.
            </p>
          </div>

          {/* Item 3 */}
          <div className='w-full md:w-auto flex flex-col justify-center items-center text-center'>
            <FaCar className='text-5xl md:text-7xl lg:text-9xl text-[#0caa4b]' />
            <h1 className='text-[20px] md:text-[24px] font-medium text-[#000000] mt-4'>
              Access to a Diverse and Extensive Fleet
            </h1>
            <p className='text-[14px] md:text-[16px] font-normal text-[#666b7f] pt-3 px-4'>
              Gain access to a wide-ranging and extensive fleet of vehicles spanning the entire country.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyRent;
