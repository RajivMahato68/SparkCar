import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import car1 from "../../assets/car1.jpg";
import Modal from './ExporeModal'; 


function SimpleSlider() {
  const Package = [
    { image: car1 },
    { image: car1 },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCar, setSelectedCar] = React.useState(null);

  const handleRentNow = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  // Custom Previous Arrow Component
  const PreviousArrow = ({ onClick }) => (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack
        size={40}
        className="text-gray-600 hover:text-gray-500 ml-5 bg-gray-300 rounded-full"
      />
    </div>
  );

  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward
        size={40}
        className="text-gray-600 hover:text-gray-500 bg-gray-300 rounded-full mr-5"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Use custom Next Arrow
    prevArrow: <PreviousArrow />, // Use custom Previous Arrow
  };

  return (
    <>
    <Slider {...settings}>
      {Package.map((item, index) => (
        <div key={index} className="relative">
          <div className="bg-white text-right w-full h-1/4 rounded-lg shadow-md overflow-hidden border border-gray-300">
            <img
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={item.image}
              alt={`Slide ${index + 1}`}
            />
            {/* Button positioned in front of the image */}
            <button
              className="absolute bottom-5 right-5 bg-[#1ecb15] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => handleRentNow(item)}
            >
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </Slider>
    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carData={selectedCar}
      />
    </>
  );
}

function SpecialPackage() {
  return (
    <>
      <div className="w-full text-center justify-center pt-20 px-4 sm:px-10 lg:px-96">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031b4e]">Our Special Packages</h1>
        <p className="text-[#9f9f9f] text-md sm:text-lg lg:text-xl font-outfit pt-5">
          Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
        </p>
      </div>
      <div className="w-full h-full px-4 sm:px-16 lg:px-32 pt-10 relative">
        <SimpleSlider />
      </div>
    </>
  );
}

export default SpecialPackage;
