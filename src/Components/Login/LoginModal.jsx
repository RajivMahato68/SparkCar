import React, { useState } from 'react';
import car1 from "../../assets/we.jpg";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import ForgotPasswordModal from './ForgotPasswordModal';
import RegisterModal from './RegisterModal'; 

export default function LoginModal({ isOpen, onClose }) {
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false); // State for Register Modal
  const [showPassword, setShowPassword] = useState(false);
  

  const openForgotPasswordModal = () => {
    setForgotPasswordOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setForgotPasswordOpen(false);
    setRegisterOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true); // Open the registration modal
  };

  const closeRegisterModal = () => {
    setRegisterOpen(false); // Close the registration modal
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);

  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 pt-32 md:p-72">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Form Section */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            
            <h2 className="text-2xl flex justify-between font-semibold mb-4 text-center">
            Spark Car
            <IoClose 
              onClick={onClose} 
              className=" lg:hidden  rounded-full text-black text-3xl" 
            />
              </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-[#1ecb15] focus:border-[#1ecb15]"
                  required
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-2 flex items-center pt-5 text-3xl"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} 
                </button>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-[#1ecb15] text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none w-full"
                >
                  Log In
                </button>
                <p
                  className='text-center text-[12px] font-normal text-[#2c92ff] cursor-pointer mt-2 ml-36 md:ml-52'
                  onClick={openForgotPasswordModal}
                >
                  Forgot Password?
                </p>
                <p className='text-center text-[12px] font-normal pt-3'>
                  Don't have an account?
                  <span className='text-[#2c92ff] cursor-pointer' onClick={openRegisterModal}> Create one</span>
                </p>
                <p className='text-center text-[12px] font-normal pt-3 pb-3 text-[#2c92ff]'>Or sign in with</p>
                <div className='flex flex-col items-center text-center'>
                  <p className='items-center flex h-10 w-full max-w-[280px] bg-[#f2f2f2] mb-2 cursor-pointer hover:shadow-md hover:bg-slate-200 '>
                    <FcGoogle className='text-2xl mr-2 ' />Sign in with Google
                  </p>
                  <p className='items-center flex h-10 w-full max-w-[280px] bg-[#f2f2f2] cursor-pointer hover:shadow-md hover:bg-slate-200'>
                    <RiFacebookCircleLine className='text-2xl mr-1' />Sign in with Facebook
                  </p>
                </div>
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
      
      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        isOpen={isForgotPasswordOpen} 
        onClose={closeForgotPasswordModal} 
        setRegisterOpen={setRegisterOpen}
      />
      
      {/* Register Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={closeRegisterModal} 
      />
    </>
  );
}
