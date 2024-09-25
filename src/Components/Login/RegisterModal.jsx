import React, { useState } from 'react'; // Import useState
import { IoClose } from "react-icons/io5";
import car1 from "../../assets/we.jpg"; // Ensure you import your image

export default function RegisterModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle password visibility
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 pt-32 md:p-72">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Form Section */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            
            <h2 className="text-2xl flex justify-between font-semibold mb-4 text-center pt-5">
            Spark Car
            <IoClose 
              onClick={onClose} 
              className="lg:hidden rounded-full text-black text-3xl" 
            />
                </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="username" 
                  placeholder='FirstName'
                  className="w-1/2 p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
                <input type="text" 
                placeholder="lastName"
                className="w-1/2 p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required/>
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-1">
                  Phone Number
                </label>
                <input
                type='text'
                  id="Phone"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-1">
                  Email
                </label>
                <input
                type='email'
                  id="Email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-1">
                  Password
                </label>
                <input
                type='text'
                  id="password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-1">
                 Confirm Password
                </label>
                <input
                type='text'
                  id="confirmPassword"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
               
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-[#1ecb15] text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none w-full"
                >
                  Register
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <img
              src={car1}
              alt="Spark Car"
              className="w-full h-full object-cover rounded-lg"
            />
            <IoClose 
              onClick={onClose} 
              className="absolute top-4 right-4 text-2xl bg-white cursor-pointer rounded-full p-1 shadow-md" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
