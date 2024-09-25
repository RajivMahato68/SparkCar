import React, { useState, useEffect } from 'react';
import car1 from "../../assets/we.jpg";

function QualityClient() {
  const [content, setContent] = useState(''); // Initialize as empty
  const [activeButton, setActiveButton] = useState('Luxury'); // Set default active button to 'Luxury'

  // Handler for button clicks with multi-line paragraph content
  const handleButtonClick = (category) => {
    setActiveButton(category); // Set the clicked button as active
    let paragraph;
    switch (category) {
      case 'Luxury':
        paragraph = `Explore our luxury vehicle collection at Spark Car where each vehicle is selected with precision to ensure our customers a premium driving experience. With Spark Car, elevate your travel expectations and experience the unmatched elegance of our premium vehicles.`;
        break;
      case 'Comfort':
        paragraph = `At Spark Car, we ensure you will have a comfortable ride and a seamless journey to any destination. It's not just transportation; it's an experience for your absolute relaxation and enjoyment.`;
        break;
      case 'Prestige':
        paragraph = `Your safety is our priority. We do continuous monitoring with regular vehicle maintenance, to guarantee a secure journey every time you ride with us. Your peace of mind is our promise, so you can travel confidently and safely.`;
        break;
      default:
        paragraph = 'Select a category';
    }
    setContent(paragraph);
  };

  // Use useEffect to set the default content to 'Luxury' on component mount
  useEffect(() => {
    handleButtonClick('Luxury');
  }, []);

  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-between bg-[#f6f6f6] gap-8'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 py-8'>
          <img src={car1} alt="Quality Client" className='object-cover h-[300px] md:h-[90%] w-full'/>
        </div>

        {/* Content Section */}
        <div className='w-full md:w-1/2 py-8 flex flex-col'>
          <h1 className='text-xl md:text-[28px] font-semibold text-[#031b4e] text-center md:text-left'>Only Quality For Clients</h1>

          {/* Buttons */}
          <div className='grid grid-cols-3 gap-4 w-full md:w-1/2 px-4 pt-8 uppercase text-center'>
            <button
              className={`uppercase p-2 hover:text-[#1ecb15] ${activeButton === 'Luxury' ? 'bg-[#1ecb15] text-white hover:text-white shadow-md shadow-[#1ecb15] rounded-md' : ''}`}
              onClick={() => handleButtonClick('Luxury')}
            >
              Luxury
            </button>
            <button
              className={`uppercase p-2 hover:text-[#1ecb15] ${activeButton === 'Comfort' ? 'bg-[#1ecb15] text-white hover:text-white shadow-md shadow-[#1ecb15] rounded-md' : ''}`}
              onClick={() => handleButtonClick('Comfort')}
            >
              Comfort
            </button>
            <button
              className={`uppercase p-2 hover:text-[#1ecb15] ${activeButton === 'Prestige' ? 'bg-[#1ecb15] text-white hover:text-white shadow-md shadow-[#1ecb15] rounded-md' : ''}`}
              onClick={() => handleButtonClick('Prestige')}
            >
              Prestige
            </button>
          </div>

          {/* Dynamic Content */}
          <div className='mt-8 w-full md:pr-32 px-5'>
            <p className='whitespace-pre-line text-[#a19c90]'>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QualityClient;
