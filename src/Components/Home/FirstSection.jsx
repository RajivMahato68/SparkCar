import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import photo from "../../assets/backgroundHome.jpg";
import car2 from "../../assets/car2.jpg";
import hire from "../../assets/hireDriver.jpg";
import car1 from "../../assets/car1.jpg";

const CarRentalForm = () => {
  const [selectedService, setSelectedService] = useState("rent");
  const [vehicleType, setVehicleType] = useState("");

  const serviceOptions = [
    { id: "rent", label: "Rent a Car", photo: car1 },
    { id: "driver", label: "Hire a Driver", photo: hire },
    { id: "self-drive", label: "Self Drive", photo: car2 },
  ];

  const vehicleOptions = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "truck", label: "Truck" },
    { value: "minivan", label: "Minivan" },
  ];

  const handleServiceChange = (service) => setSelectedService(service);
  const handleVehicleTypeChange = (e) => setVehicleType(e.target.value);

  return (
    <div
      className="relative bg-cover bg-center min-h-screen h-full flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 md:pt-36 pt-20 md:pb-8">
        Looking for a <span className="text-green-600">Car?</span> Rent a Car in just a few easy steps.
      </h1>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Service Options */}
            <div className="flex flex-col space-y-4">
              <label className="font-semibold text-gray-700 text-lg">Choose a service</label>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    className={`relative w-full h-32 md:h-40 rounded-lg overflow-hidden transition-transform duration-300 ${
                      selectedService === service.id ? "bg-gray-200" : "bg-white"
                    }`}
                    onClick={() => handleServiceChange(service.id)}
                    style={{
                      outline: selectedService === service.id ? "4px solid #34d399" : "none",
                    }}
                  >
                    <img src={service.photo} alt={service.label} className="w-full h-full object-cover" />
                    <p className="absolute bottom-2 w-full text-center text-white bg-black bg-opacity-50 p-2 text-sm">
                      {service.label}
                    </p>
                    {selectedService === service.id && (
                      <FaCheckCircle className="absolute top-2 right-2 text-green-600 text-2xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pick-Up Location and Date */}
            <div className="flex flex-col space-y-4">
              <label className="font-semibold text-gray-700 text-lg">Pick-Up Location</label>
              <input
                type="text"
                placeholder="Please enter pick-up location"
                className="border-2 rounded-lg p-3 w-full"
              />
              <label className="font-semibold text-gray-700 text-lg mt-4">Pick-Up Date</label>
              <input type="datetime-local" className="border-2 rounded-lg p-3 w-full" />
            </div>

            {/* Drop-Off Location and Date */}
            <div className="flex flex-col space-y-4">
              <label className="font-semibold text-gray-700 text-lg">Drop-Off Location</label>
              <input
                type="text"
                placeholder="Please enter drop-off location"
                className="border-2 rounded-lg p-3 w-full"
              />
              <label className="font-semibold text-gray-700 text-lg mt-4">Drop Date</label>
              <input type="datetime-local" className="border-2 rounded-lg p-3 w-full" />
</div>
</div>
<div className="">
              {/* Select Vehicle Type for 'driver' service */}
              {selectedService === "driver" && (
                <div className="flex flex-col space-y-4 mt-4 md:mt-0 pl-0 md:pl-52 lg:pl-72 xl:pl-96 ">
                  <label className="font-semibold text-gray-700 text-lg">Select Vehicle Type</label>
                  <div className="flex flex-col md:flex-row md:space-x-4 items-center">
                    <select
                      value={vehicleType}
                      onChange={handleVehicleTypeChange}
                      className="border-2 rounded-lg p-3 flex-grow"
                    >
                      <option value="">-- Choose a vehicle type --</option>
                      {vehicleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 mt-4 md:mt-0 ">
                      Find Driver
                    </button>
                  </div>
                </div>
              )}
            </div>
          {/* </div> */}

          {/* Submit Button */}
          {selectedService !== "driver" && (
            <div className="flex justify-end">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                Find Vehicle
              </button>
            </div>
          )}
        </div>

        {/* Additional Information Section */}
        <div className="p-14 bg-opacity-70 w-full mt-6 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            {[
              {
                number: 1,
                title: "Choose Your Favorite Vehicle",
                description: "Select your preferred vehicle, tailored to your journey as per your requirement.",
              },
              {
                number: 2,
                title: "Make a Booking",
                description: "You can make easy bookings through our user-friendly app or a simple phone call.",
              },
              {
                number: 3,
                title: "Pick-Up Location & Date",
                description: "Select your nearest location with the date and time for your journey.",
              },
              {
                number: 4,
                title: "Sit Back & Relax",
                description: "Sit back, relax, and let your safe and convenient journey begin with Spark Car.",
              },
            ].map((item, index) => (
              <div key={item.number} className="flex md:flex-col md:space-y-1 relative">
                <div className="relative w-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#1ecb15] text-white font-semibold text-lg z-10 ">
                    {item.number}
                  </div>
                  {/* Horizontal or vertical line between number circles */}
                  {index < 3 && (
                    <div
                      className="absolute top-1/2 left-full transform -translate-x-1/2 md:w-72 md:h-0.5 w-0.5 h-40 md:-ml-20  md:mr-4 md:mt-0 -mt-10 -ml-5 bg-[#1ecb15] "
                    />
                  )}
                </div>
                <div className="flex flex-col ml-4 md:ml-0">
                  <h2 className="text-lg font-semibold md:pt-6  md:pr-32 mb-4 md:mb-0 text-[14px] md:text-lg ">
                    {item.title}
                  </h2>
                  <p className="md:text-base text-[12px] md:pl-1 ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalForm;
