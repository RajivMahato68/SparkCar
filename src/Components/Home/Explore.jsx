import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPerson } from "react-icons/bs";
import { PiHandbagFill } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import car2 from "../../assets/car2.jpg";
import hire from "../../assets/hireDriver.jpg";
import car1 from "../../assets/car1.jpg";
import Modal from './ExporeModal'; 

function SimpleSlider() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCar, setSelectedCar] = React.useState(null);

  const handleRentNow = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const SlickArray = [
    { image: car1, place: "VIP Delegates Cars", price: "2000", person: "5", bag: "4", door: "5" },
    { image: car2, place: "Airport Pickup and Drop off Service", price: "3000", person: "6", bag: "4", door: "0" },
    { image: car2, place: "Pick and Drop inside Ringroad by Car", price: "3000", person: "8", bag: "4", door: "5" },
    { image: hire, place: "Domestic Tour Cars", price: "4000", person: "4", bag: "0", door: "1" },
    { image: hire, place: "VIP Delegates Cars", price: "4000", person: "6", bag: "4", door: "3" },
    { image: hire, place: "VIP Delegates Cars", price: "4000", person: "5", bag: "2", door: "2" },
  ];

  const PreviousArrow = ({ onClick }) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <IoIosArrowBack size={40} className="text-gray-600 hover:text-gray-500 ml-5 bg-gray-300 rounded-full" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center w-full px-2">
        <Slider {...settings} className="w-full">
          {SlickArray.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white w-full rounded-lg shadow-md overflow-hidden border border-gray-300">
                <img
                  className="w-full h-64 pt-2 pl-2 pr-2 object-cover transition-transform duration-200 ease-in-out transform hover:scale-110"
                  src={item.image}
                  alt={item.place}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold text-[#1ecb15]">{item.place}</h2>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <p className="flex items-center gap-1 text-sm"><BsPerson className="text-[#7f7f7f]" />{item.person}</p>
                    <p className="flex items-center gap-1 text-sm"><PiHandbagFill className="text-[#7f7f7f]" />{item.bag}</p>
                    <p className="flex items-center gap-1 text-sm"><GiCarDoor className="text-[#887d7d]" />{item.door}</p>
                  </div>
                  <div className="mb-2">
                    <p className="flex items-center gap-1 text-xs text-black"><FaCar />{item.place}</p>
                  </div>
                  <hr className="my-4 text-gray-500" />
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm">Starting rate from</h3>
                      <h3 className="text-xl font-bold">{item.price}</h3>
                    </div>
                    <button
                      onClick={() => handleRentNow(item)}
                      className="bg-[#1ecb15] hover:bg-green-600 text-white font-bold py-1 px-3 rounded-md"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carData={selectedCar}
      />
    </>
  );
}

function Explore() {
  return (
    <div className="flex flex-col w-full md:px-32 px-2 pt-28">
      <div className="text-center">
        <h1 className="font-bold text-2xl md:text-3xl md:pt-10 text-[#031b4e]">Explore the Spark Car Fleet</h1>
        <p className="text-[#9f9f9f] text-base md:text-md font-outfit pt-5">
          Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
        </p>
      </div>
      <div className="w-full h-full pt-10">
        <SimpleSlider />
      </div>
    </div>
  );
}

export default Explore;
