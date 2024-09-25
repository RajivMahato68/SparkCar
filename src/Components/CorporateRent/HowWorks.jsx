import React from 'react';
import form from "../../assets/form.png";
import Client from "../../assets/Client.png";
import Service from "../../assets/Service.png";
import Contractual from "../../assets/cont.png";

function HowWorks() {
  return (
    <>
      <div className='px-8 md:px-12 lg:px-24'>
        <div className='bg-[#f0eeee]'>
          {/* Title Section */}
          <div className='w-full h-full text-center justify-center px-8 md:px-24 pt-14'>
            <h1 className='uppercase text-[16px] font-semibold text-[#666666]'>
              How it works
            </h1>
            <h1 className='pt-5 text-[24px] md:text-[30px] font-normal'>
              Become Our Corporate Client in Just Four Easy Steps
            </h1>
          </div>

          {/* Flex Section for Form Submission */}
          <div className='flex flex-col lg:flex-row items-center py-10 px-8 md:px-12 lg:px-20 space-y-8 lg:space-y-0'>
            {/* Text Section */}
            <div className='lg:w-1/2 lg:pl-36'>
              <h1 className='text-[20px] md:text-[24px] font-semibold'>
                Form Submission
              </h1>
              <ul className='list-disc pl-5 pt-7'>
                <li className='list-item text-[#666b7f]'>
                 Complete the corporate client form to facilitate the rental process for corporate use of Spark Cars.
                </li>
                </ul>

            </div>
            {/* Image Section */}
            <div className='lg:w-1/2'>
              <img src={form} alt="Form Submission" className='w-full h-auto lg:pr-20' />
            </div>
          </div>

          {/* Flex Section for Corporate Client Registration */}
          <div className='flex flex-col lg:flex-row items-center py-10 px-8 md:px-12 lg:px-20 space-y-8 lg:space-y-0'>
            <div className='lg:w-1/2 lg:pl-36'>
              <h1 className='text-[20px] md:text-[24px] font-semibold'>
                Corporate Client Registration & Confirmation
              </h1>
              <ul className='list-disc pl-5 pt-7'>
                <li className='list-item text-[#666b7f]'>
                Upon form submission, our operations department will promptly reach out to you to ensure necessary documents for the corporate client registration and confirmation.
                </li>
                </ul>
            </div>
            <div className='lg:w-1/2'>
              <img src={Client} alt="Corporate Client Registration" className='w-full h-auto lg:pr-20' />
            </div>
          </div>

          {/* Flex Section for Contractual Agreement */}
          <div className='flex flex-col lg:flex-row items-center py-10 px-8 md:px-12 lg:px-20 space-y-8 lg:space-y-0'>
            <div className='lg:w-1/2 lg:pl-36'>
              <h1 className='text-[20px] md:text-[24px] font-semibold'>
                Contractual Agreement
              </h1>
              <ul className='list-disc pl-5 pt-7'>
                <li className='list-item text-[#666b7f]'>
                Formalize the rental arrangement with a comprehensive contractual agreement to ensure clarity and mutual understanding.
                </li>
                </ul>
            </div>
            <div className='lg:w-1/2'>
              <img src={Contractual} alt="Contractual Agreement" className='w-full h-auto lg:pr-20' />
            </div>
          </div>

          {/* Flex Section for Service Delivery */}
          <div className='flex flex-col lg:flex-row items-center py-10 px-8 md:px-12 lg:px-20 space-y-8 lg:space-y-0'>
            <div className='lg:w-1/2 lg:pl-36'>
              <h1 className='text-[20px] md:text-[24px] font-semibold'>
                Service Delivery
              </h1>
              <ul className='list-disc pl-5 pt-7'>
                <li className='list-item text-[#666b7f]'>
                Experience efficient and reliable service delivery from Spark Cars for all your corporate transportation needs.
                </li>
                </ul>
            </div>
            <div className='lg:w-1/2'>
              <img src={Service} alt="Service Delivery" className='w-full h-auto lg:pr-20' />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HowWorks;
