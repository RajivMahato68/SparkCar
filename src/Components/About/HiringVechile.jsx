import React, { useState, useEffect, useRef } from 'react';
import { FaPen, FaGolfBallTee } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { motion } from 'framer-motion';
import photo from "../../assets/center.png"; // Make sure to import your image

function HiringVechile() {
  const [isVisible, setIsVisible] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Start the animation when visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the content is visible
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    if (centerRef.current) observer.observe(centerRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
      if (centerRef.current) observer.unobserve(centerRef.current);
    };
  }, []);

  return (
    <>
      <h1 className='text-2xl md:text-3xl mb-6 pt-10 text-[#031b4e] text-center font-semibold'>
        Hiring a vehicle? You're at the right place.
      </h1>
      <p className='text-center text-[16px] font-semibold text-[#031b4e]'>
        Spark Car, तपाइको यात्राको सहयात्री।
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:pl-24 py-16 w-full'>
        {/* Left side content */}
        <motion.div
          className='flex flex-col'
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          ref={leftRef}
        >
          <div className='mb-6 flex flex-col items-start w-full '>
            <h1 className='text-[17px] md:text-[17px] flex items-center gap-4 text-[#3f4254] font-semibold'>
              <GiTrophyCup className='text-5xl md:text-6xl bg-[#1ecb15] text-white rounded-lg p-2' />
              20+ Years of Providing Luxury Car Services in Nepal
            </h1>
            <p className='text-sm md:text-[15px] text-[#818181] pl-14 md:pl-16 mt-2 font-normal'>
            For over two decades, we've provided supreme experiences in luxury car services, bringing safety and comfort to every drive in Nepal.
            </p>
          </div>
          <div className='flex flex-col items-start w-full'>
            <h1 className='text-[17px] md:text-[17px] flex items-center gap-4 text-[#3f4254] font-semibold'>
              <GiTrophyCup className='text-5xl md:text-6xl bg-[#1ecb15] text-white rounded-lg p-2' />
              Services Available in 50+ Major Cities of Nepal
            </h1>
            <p className='text-sm md:text-[15px] text-[#818181] pl-14 md:pl-16 mt-2'>
              Spark Car is at your service for your extraordinary adventures in major cities across Nepal. Wherever your journey leads, we're here for you.
            </p>
          </div>
        </motion.div>

        {/* Center content (Image in the middle) */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={centerRef}
        >
          <img className='w-full max-w-xs md:max-w-sm object-cover object-center mx-auto' src={photo} alt="Why Spark Car" />
        </motion.div>

        {/* Right side content */}
        <motion.div
          className='flex flex-col'
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          ref={rightRef}
        >
          <div className='mb-6 flex flex-col items-end w-full md:pr-24'>
            <h1 className=' text-[17px] md:text-[17px] flex flex-row-reverse text-right items-center gap-4 text-[#4e5161] font-semibold'>
              <FaPen className='text-5xl md:text-6xl bg-[#1ecb15] text-right text-white rounded-lg p-2' />
              Safe Rides Anyday, Everyday (24/7 365 days)
            </h1>
            <p className='text-sm md:text-[15px] text-right text-[#818181] pr-16 mt-2'>
              We are never off duty. Safe and reliable journeys, every day, all year round just for you.
            </p>
          </div>
          <div className='flex flex-col items-end w-full md:pr-24'>
            <h1 className='text-[17px] md:text-[17px] flex flex-row-reverse text-right items-center gap-4 text-[#4e5161] font-semibold'>
              <FaGolfBallTee className='text-5xl md:text-6xl bg-[#1ecb15] text-right text-white rounded-lg p-2' />
              Range of Options - Economical to Premium Cars
            </h1>
            <p className='text-sm md:text-[15px] text-right text-[#818181] pr-16 mt-2'>
              Choose your favorite car from our versatile fleet that caters to every need, no matter your style or budget.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HiringVechile;
