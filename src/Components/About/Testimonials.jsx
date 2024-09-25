import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import car2 from "../../assets/car2.jpg";
import hire from "../../assets/hireDriver.jpg";
import car1 from "../../assets/car1.jpg";

function SimpleSlider() {
  const Tour = [
    { image: car1, name: "Rajesh Hamal", role: "Megastar/Actor", Description: "I usually travel with Spark Car rental . I recommend you to use their best quality service. Thank You Spark Car" },
    { image: car1, name: "Anil Keshary Shah", role: "Banker Celebrity", Description: "I always choose Spark Car when it comes to my premium vehicle needs on any occasion or the places I like to travel. They are the best." },
    { image: car1, name: "Akash Golcha", role: "Director - Golchha Organization", Description: "I want to recommend Spark Car to everyone who wants to rent vehicles in Nepal. It's a unique service Spark Car has brought here in Nepal." },
    { image: car1, name: "Rishi Dhamala", role: "Journalist", Description: "If anybody needs a reliable, safe, and premium car rental service in Nepal. I solely recommend Spark Car." },
    { image: car1, name: "Barsha Siwakoti", role: "Actress", Description: "Sometimes when my driver is on leave, Spark Driver has always been my best choice. I recommend Spark Driver to everyone who needs Driver Hire Service." },
   
  ];

  const PreviousArrow = ({ onClick }) => (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack size={40} className="text-gray-600 hover:text-gray-500 bg-gray-300 rounded-full" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward size={40} className="text-gray-600 hover:text-gray-500 bg-gray-300 rounded-full" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <Slider {...settings} className="w-full max-w-screen-lg">
        {Tour.map((item, index) => (
         <div key={index} className="px-2">
         {/* Fixed height card */}
         <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 h-[400px] flex flex-col">
           {/* Image container with flex to center */}
           <div className="flex justify-center items-center h-40">
             <img
               className="rounded-full object-cover w-32 h-32 pt-2"
               src={item.image}
               alt={item.name}
             />
           </div>
           {/* Text content */}
           <div className="p-4 flex-grow flex flex-col">
             <div className="flex-grow">
               {/* Reduced margin between name and role */}
               <h2 className="text-[16px] font-bold text-center text-[#1ecb15]">{item.name}</h2>
               <h2 className="text-[14px] font-bold text-center text-[#1ecb15] mb-1">{item.role}</h2>
             </div>
             {/* Reduced padding for description */}
             <div className="flex justify-center text-[#2727ff] mt-1">
               <p className="text-gray-700 text-[16px] font-normal text-center overflow-auto leading-tight pb-20">     
                 {item.Description}
               </p>
             </div>
           </div>
         </div>
       </div>
        ))}
      </Slider>
    </div>
  );
}

function Testimonials() {
  return (
    <>
    <div className="bg-[#f0f8ff]">
      <div className="text-center md:pt-10 pt-5 px-2 md:px-32 ">
        <h1 className="font-bold text-3xl text-[#031b4e]">Testimonials</h1>
      </div>
      <div className="w-full h-full md:px-32 pt-10 relative pb-20">
        <SimpleSlider />
      </div>
    </div>
    </>
  );
}

export default Testimonials;
