import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContractForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.email) newErrors.email = 'Email is required';
        if(!formData.additionalInfo) newErrors.additionalInfo = 'Additional information is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between p-6 lg:px-24 space-y-6 lg:space-y-0">
            <div className="bg-white p-5 rounded w-full lg:w-[70%]">
                <h2 className="text-[26px] font-semibold mb-4">Do you have any questions?</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="w-full">
                            <input
                                type="text"
                                id="name"
                                placeholder='Your Name'
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`mt-1 block w-full h-12 rounded-md border border-[#eeeeee] bg-[#f9f9f9] focus:outline-none focus:border-[#a8a6a6] focus:shadow-xl focus:bg-slate-100 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="w-full">
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
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div className="w-full">
                            <input
                                type="email"
                                id="email"
                                placeholder='Email Address'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`mt-1 block w-full h-12 border border-[#eeeeee] bg-[#f9f9f9] focus:outline-none focus:border-[#a8a6a6] focus:shadow-xl focus:bg-slate-100 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="additionalInfo"
                            placeholder='Your Message'
                            rows={7}
                            cols={10}
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className={`mt-1 block w-full border border-[#eeeeee] bg-[#f9f9f9] focus:outline-none focus:border-blue-700 focus:bg-slate-100 focus:shadow-xl ${errors.additionalInfo ? 'border-red-500' : ''}`}
                        ></textarea>
                        {errors.additionalInfo && <p className="text-red-500 text-sm">{errors.additionalInfo}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-52 bg-[#1ecb15] text-white py-2 rounded hover:shadow-xl"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="bg-white p-5 rounded border shadow-md w-full lg:w-1/3 h-full">
                <div className='ml-3'>
                    <h1 className="font-semibold mt-3 mb-2 text-[20px]">Head Office</h1>
                    <p className="mt-2 text-gray-600 flex gap-2">
                        <CiLocationOn className="text-[#1ecb15] text-2xl" />
                        Mid Baneshwar
                    </p>
                    <p className="mt-2 text-gray-600 flex gap-2">
                        <FaPhoneAlt className="text-[#1ecb15] text-xl" />
                        9824830624
                    </p>
                    <p className="mt-2 text-[#1ecb15] pb-5 flex gap-2">
                        <MdOutlineMail className="text-[#1ecb15] text-xl" />
                        <a href="mailto:rajipmahato68@gmail.com" className="text-[#1ecb15]">rajipmahato68@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContractForm;
