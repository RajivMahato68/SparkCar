import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import car2 from "../../assets/car2.jpg";
import hire from "../../assets/hireDriver.jpg";
import car1 from "../../assets/car1.jpg";
import { IoClose } from "react-icons/io5";


// Modal Component
function Modal({ isOpen, onClose, selectedTour }) {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  // Handle form submission (you can add validation here)
  const handleSubmit = () => {
    const formData = {
      pickupLocation,
      pickupDate,
      dropDate,
    };
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className=" flex justify-between md:text-2xl text-xl font-bold mb-4 text-center">Change Location and Time
        <IoClose 
              onClick={onClose} 
              className=" rounded-full text-black text-3xl cursor-pointer" 
            />
        </h2>
        <hr />
        <div className=" my-4">
          <label htmlFor="pickupLocation">Pick-Up Location inside Kathmandu</label>
          <input
            type="text"
            placeholder="From location"
            className="border border-gray-300 w-full py-2"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>
        {/* Pick-Up and Drop Off Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 text-lg">Pick-Up Date</label>
            <input
              type="datetime-local"
              className="border-2 rounded-lg p-3 w-full"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 text-lg">Drop Date</label>
            <input
              type="datetime-local"
              className="border-2 rounded-lg p-3 w-full"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md mr-2"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-[#1ecb15] hover:bg-green-600 text-white py-2 px-4 rounded-md"
            onClick={handleSubmit}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

// SimpleSlider Component
function SimpleSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const Tour = [
    { image: car1, place: "Nagarkot", price: "2000", D: "2D" },
    { image: car2, place: "Kathmandu", price: "3000", D: "4D" },
    { image: car2, place: "Kathmandu", price: "3000", D: "3D" },
    { image: hire, place: "Lalitpur", price: "4000", D: "5D" },
    { image: hire, place: "Lalitpur", price: "4000", D: "4D" },
    { image: hire, place: "Lalitpur", price: "4000", D: "3D" },
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
    ],
  };

  // Handle opening the modal
  const handleBuyClick = (tour) => {
    setSelectedTour(tour); // Set the selected tour package
    setIsModalOpen(true);  // Show the modal
  };

  return (
    <div className="w-full flex justify-center">
      <Slider {...settings} className="w-full max-w-screen-lg">
        {Tour.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
              <img
                className="w-full h-64 pt-2 pl-2 pr-2 object-cover transition-transform duration-200 ease-in-out transform hover:scale-110"
                src={item.image}
                alt={item.place}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-[#1ecb15]">{item.place}</h2>
                  <div className="flex text-[#2727ff] items-center">
                    <p>
                      <MdAccessTime />
                    </p>
                    <p className="text-gray-700 text-sm">
                      <span className="inline-block rounded-full px-2 py-1 text-lg font-bold">
                        {item.D}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">NPR {item.price}</h3>
                  <button
                    className="bg-[#1ecb15] hover:bg-green-600 text-white font-bold py-1 px-4 rounded-md"
                    onClick={() => handleBuyClick(item)} // Open modal with specific item
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedTour={selectedTour} />
    </div>
  );
}

function TourPackages() {
  return (
    <>
      <div className="text-center md:pt-10 pt-5 px-2 md:px-32">
        <h1 className="font-bold text-3xl text-[#031b4e]">Tour Packages</h1>
        <p className="text-[#9f9f9f] text-base md:text-md font-outfit pt-5">
          Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
        </p>
      </div>
      <div className="w-full h-full md:px-32 pt-10 relative">
        <SimpleSlider />
      </div>
    </>
  );
}

export default TourPackages;
