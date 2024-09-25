import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { LuPenTool } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdAccessTime } from 'react-icons/md';
import { PiAddressBookBold } from 'react-icons/pi';

function Benefits() {
  return (
    <div className='py-16 px-4 md:px-16 lg:px-32'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#0caa4b]  mb-8'>
        Benefits of Hiring A Driver
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 rounded-md'>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <FaCarAlt className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Personalized 24/7 Driver Hire
            </h1>
            <p className='text-center mt-4 '>
              Spark Driver offers a personalized experience tailored to your preferences.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <BsFillPersonCheckFill className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Safety First
            </h1>
            <p className='text-center mt-4 leading-[2.5]'>
              Your safety is our top priority. Our drivers are trained even for emergency response protocols.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <LuPenTool className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Transparent-Fixed Price
            </h1>
            <p className='text-center mt-4 leading-[2.5]'>
              Streamline your driver hire with our transparent pricing with no hidden costs for a seamless experience.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <IoPeopleSharp className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Expertise Service
            </h1>
            <p className='text-center mt-4 leading-[2.5]'>
              Our drivers are more than just chauffeurs; they are seasoned navigators familiar with the intricacies of Nepal's roads.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <MdAccessTime className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Punctuality and Reliability
            </h1>
            <p className='text-center mt-4 leading-[2.5]'>
              Always on time! Spark Driver Rental Services guarantees punctuality and reliability.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#f4f4f4] w-full h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md'>
            <PiAddressBookBold className='text-4xl md:text-5xl text-[#0caa4b]' />
            <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold text-[#0caa4b] mt-4'>
              Easy Booking
            </h1>
            <p className='text-center mt-4 leading-[2.5]'>
              Experience the convenience of our Professional Driver Hire Services by simply contacting us via call or downloading the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
