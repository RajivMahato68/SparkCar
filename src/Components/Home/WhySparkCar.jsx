import React, { useState, useEffect, useRef } from 'react';
import { FaPen, FaGolfBallTee } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { motion } from 'framer-motion';
import photo from "../../assets/center.png"; // Make sure to import your image

function WhySparkCar() {
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
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-24 py-16 w-full'>
        {/* Left side content (First two items) */}
        <motion.div
          className='flex flex-col px-4'
          initial={{ opacity: 0, x: 10 }} // Initial animation state
          animate={isVisible ? { opacity: 1, x: 0 } : {}}   // Animate only when visible
          transition={{ duration: 0.4, delay: 0.4 }} // Duration and delay
          ref={leftRef} // Ref to observe this content
        >
          <div className='mb-6'>
            <h1 className='text-xl md:text-2xl flex gap-4 items-center text-[#4e5161]'>
              <GiTrophyCup className='text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white'/>
              24-hour Customer Service
            </h1>
            <p className='text-sm md:text-[15px] text-[#818181] pl-16'>
              We promise impeccable service by promptly addressing your queries and problems through our dedicated 24/7 customer support team.
            </p>
          </div>
          <div className=''>
            <h1 className='text-xl md:text-2xl flex gap-4 items-center text-[#4e5161]'>
              <GiTrophyCup className='text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white '/>
              ISO Certification
            </h1>
            <p className='text-sm md:text-[15px] text-[#818181] pl-16'>
              We are an ISO 9001, ISO 14001 and ISO 45001 certified car rental company with 20+ years of service excellence in Nepal.
            </p>
          </div>
        </motion.div>

        {/* Center content (Image in the middle) */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }} // Initial animation state for the image
          animate={isVisible ? { opacity: 1, y: 0 } : {}}   // Animate only when visible
          transition={{ duration: 1 }}     // Duration of the animation
          ref={centerRef} // Ref to observe this content
        >
          <div className='text-center'>
            <h1 className='text-2xl md:text-3xl mb-6 text-[#031b4e] font-bold'>Why Spark Car?</h1>
            <img className='w-full max-w-xs md:max-w-sm object-cover mx-auto' src={photo} alt="Why Spark Car" />
          </div>
        </motion.div>

        {/* Right side content (Last two items) */}
        <motion.div
          className='flex flex-col px-4'
          initial={{ opacity: 0, x: -10 }}  // Initial animation state
          animate={isVisible ? { opacity: 1, x: 0 } : {}}    // Animate only when visible
          transition={{ duration: 0.4, delay: 0.4 }} // Duration and delay
          ref={rightRef} // Ref to observe this content
        >
          <div className='w-full text-left mb-6'>
            <h1 className='text-xl md:text-2xl flex flex-row-reverse text-right items-center gap-4 text-[#4e5161]'>
              <FaPen className='text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white'/>
              Own Dedicated Workshop
            </h1>
            <p className='text-sm md:text-[15px] text-right text-[#818181] pr-16'>
              We ensure impeccable fleet management, with regular inspections for optimal vehicle performance and customer satisfaction.
            </p>
          </div>
          <div className='w-full text-left'>
            <h1 className='text-xl md:text-2xl flex flex-row-reverse text-right items-center gap-4 text-[#4e5161]'>
              <FaGolfBallTee className='text-5xl md:text-6xl rounded-lg bg-[#1ecb15] text-white'/>
              All Over Nepal Service
            </h1>
            <p className='text-sm md:text-[15px] text-right text-[#818181] pr-16'>
              Our service spans all 7 provinces and 77 districts, ensuring accessibility for your transportation needs nationwide.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WhySparkCar;
