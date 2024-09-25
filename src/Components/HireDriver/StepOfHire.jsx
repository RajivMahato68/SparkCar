import React from 'react'
import { useNavigate } from 'react-router-dom';


function StepOfHire() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/"); // Redirects to the home page
      window.scrollTo(0, 0);
    };
  return (
    <>
      <h1 className="text-center px-1 text-[28px] md:text-[34px] font-bold text-[#0ca94b]">
        Hire a Driver in Nepal in Just Three Easy Steps
      </h1>
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 lg:px-32 py-10 gap-5">
        {/* Step 1 */}
        <div className="w-full md:w-1/3 h-auto p-6 shadow-2xl">
          <h1 className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1bac4b] text-white font-bold text-3xl z-10">1</h1>
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#1bac4b] mt-5">
            Download the App/Call
          </h1>
          <p className="text-justify pt-5 text-[14px] md:text-[16px] font-normal">
            The user provides details on pick-up and drop-off date and time, vehicle type and model, location, and billing information for driver hire in Nepal.
          </p>
        </div>
        {/* Step 2 */}
        <div className="w-full md:w-1/3 h-auto p-6 shadow-2xl">
          <h1 className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1bac4b] text-white font-bold text-3xl z-10">2</h1>
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#1bac4b] mt-5">
            Driver Booking Gets Confirmed
          </h1>
          <p className="text-justify pt-5 text-[14px] md:text-[16px] font-normal">
            <span className='text-[#1bac4b]'> <button
            onClick={handleButtonClick}
            >Spark Car</button></span> confirms booking, assigns a suitable driver, and updates users with real-time driver status notifications.
          </p>
        </div>
        {/* Step 3 */}
        <div className="w-full md:w-1/3 h-auto p-6 shadow-2xl">
          <h1 className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1bac4b] text-white font-bold text-3xl z-10">3</h1>
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#1bac4b] mt-5">
            Spark Driver Arrives at Pick-up Point
          </h1>
          <p className="text-justify pt-5 text-[14px] md:text-[16px] font-normal">
            The Spark Driver reaches the pick-up point, introduces himself to the customer, and then embarks on the journey.
          </p>
        </div>
      </div>
    </>
  )
}

export default StepOfHire
