import React from 'react';
import car1 from "../../assets/we.jpg";

const offerData = [
  {
    id: 1,
    value: '5000',
    label: 'No of Vehicles',
  },
  {
    id: 2,
    value: '2 Lakh+',
    label: 'Customers Served Annually',
  },
  {
    id: 3,
    value: '5000+',
    label: 'No of Drivers',
  },
  {
    id: 4,
    value: '30',
    label: 'Years of Experience',
  }
];

function WeOffer() {
  return (
    <>
      <div
        className="relative bg-cover h-auto md:h-96 object-cover"
        style={{
          backgroundImage: `url(${car1})`,
        }}
      >
        {/* Overlay to dim the image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className='w-full md:w-3/4 lg:w-1/2 h-full md:justify-center pt-10 md:pt-20 px-4'>
            <h1 className='text-white text-xl md:text-2xl font-bold text-center md:text-left md:pl-2'>
              We offer customers a diverse fleet of 
              <span className='text-[#1cbc17]'> commercial and luxury cars </span> 
              customized to suit any requirements.
            </h1>
          </div>

          {/* Dynamically rendering stats from the array */}
          <div className='flex flex-col md:flex-row lg:flex-row md:gap-5 pt-10 md:w-full items-center justify-center'>
            {offerData.map((item) => (
              <div key={item.id} className='w-full sm:w-80 md:w-60 h-32 md:h-36 bg-[#4d4e4c] bg-opacity-50 text-center flex flex-col justify-center m-3'>
                <h1 className='text-[#1cbc17] text-2xl md:text-3xl font-bold mb-2'>{item.value}</h1>
                <p className='text-white text-sm md:text-base'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeOffer;
