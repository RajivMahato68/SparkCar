import { useState } from "react";
import React from 'react';
import { IoClose } from "react-icons/io5";

export default function ForgotPasswordModal({ isOpen, onClose,setRegisterOpen }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = 'Phone number must be 10 digits';
    return newErrors;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 md:pt-72">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        
        <h2 className="text-2xl flex justify-between font-semibold mb-4 text-center" onClick={()=>setRegisterOpen(false)} >Forgot Password
        <IoClose 
          onClick={onClose} 
          className="absolute right-2 text-2xl cursor-pointer" 
        />
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Please Enter your registered Phone number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              pattern="[0-9]*"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className={`mt-1 block w-full h-12 border border-[#eeeeee] bg-[#f9f9f9] focus:outline-none focus:border-[#a8a6a6] focus:shadow-xl focus:bg-slate-100 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>} {/* Show error message */}
          </div>
          <button
            type="submit"
            className="bg-[#1ecb15] text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none w-full"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
