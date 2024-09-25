import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Question() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active question

  const questions1 = [
    {
      Question: "What is the rental car price in Nepal?",
      Answer: "You can hire a vehicle in Kathmandu for half a day and a full day at the starting price of Rs. 4000 and Rs. 6000 respectively."
    },
    {
      Question: "Does the car come with a driver?",
      Answer: "Yes, the car comes with a driver."
    },
    {
      Question: "What is the price of one-day car rental in Kathmandu, Nepal?",
      Answer: "You can rent a car in Kathmandu, Nepal from the starting price of Rs.1000 for pickup and drop services."
    },
    {
      Question: "Can you rent a car from anywhere in Nepal?",
      Answer: "Yes, you can rent a car anywhere and anytime all over Nepal."
    }
  ];

  const questions2 = [
    {
      Question: "How can you rent a car in Kathmandu Nepal?",
      Answer: "You can rent a vehicle in Kathmandu, Nepal at Spark Car via call at 01-5971616 / 9801101924 or the Spark Car app."
    },
    {
      Question: "Can you rent a car in Nepal without a driver as a self-drive rental?",
      Answer: "Yes, you can rent a car in Nepal without a driver for self-drive purposes via Spark Car."
    },
    {
      Question: "What happens in case of a vehicle breakdown?",
      Answer: "In case of vehicle breakdown or any unforeseen circumstances, we provide instant replacement to ensure a smooth journey for the customers."
    },
    {
      Question: "How do I extend the rental period in vehicle rental services in Nepal?",
      Answer: "You can extend the car rental period by calling our 24/7 customer support at 01-5971616 / 9801101924 through virtual communication between the parties."
    }
  ];

  const toggleAnswer = (index) => {
    // If the clicked question is already active, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1 className='text-center pt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-[#031b4e] font-outfit'>
        Have Any Questions?
      </h1>
      <div className='flex flex-col md:flex-row px-4 md:px-32 lg:px-64 gap-4 md:gap-8 pt-10'>
        {/* Left Column */}
        <div className='flex-1 bg-gray-100 rounded-lg shadow-md'>
          {questions1.map((item, index) => (
            <div key={index} className=''>
              <div
                className='flex items-center justify-between hover:bg-gray-200 h-18 cursor-pointer p-4'
                onClick={() => toggleAnswer(index)}
              >
                <p className='flex items-center'>
                  {activeIndex === index ? <IoIosArrowDown size={24} /> : <IoIosArrowForward size={24} />}
                  <span className='ml-2'>{item.Question}</span>
                </p>
              </div>
              {/* Conditionally render the answer based on whether the question is open */}
              {activeIndex === index && <p className="p-4 text-gray-600">{item.Answer}</p>}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className='flex-1 bg-gray-100 rounded-lg shadow-md'>
          {questions2.map((item, index) => (
            <div key={index} className=''>
              <div
                className='flex items-center justify-between hover:bg-gray-200 h-18 cursor-pointer p-4'
                onClick={() => toggleAnswer(index + questions1.length)} // Offset index for the second list
              >
                <p className='flex items-center'>
                  {activeIndex === index + questions1.length ? <IoIosArrowDown size={24} /> : <IoIosArrowForward size={24} />}
                  <span className='ml-2'>{item.Question}</span>
                </p>
              </div>
              {/* Conditionally render the answer based on whether the question is open */}
              {activeIndex === index + questions1.length && <p className="p-4 text-gray-600">{item.Answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Question;
