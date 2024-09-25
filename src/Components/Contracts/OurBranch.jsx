import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Branch = [
    { BranchAddress: "Kathmandu", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
    { BranchAddress: "Lalitpur", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
    { BranchAddress: "Bhaktapur", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
    { BranchAddress: "Machhapuchhre", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
    { BranchAddress: "Bardibash", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
    { BranchAddress: "Janakpur", phone: "9824830624", Email: "rajipmahato68@gmail.co" },
];

function OurBranch() {
    return (
        <>
            <h1 className='text-center text-[20px] font-bold pb-2'>Our Branch Offices</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-24 pb-10'>
                {Branch.map((data, index) => (
                    <div key={index} className='border pl-3 py-5'>
                        <p className='text-[20px] font-semibold text-[#1ecb15] pb-4'>{data.BranchAddress}</p>
                        <p className="mt-2 text-gray-600 flex gap-2">
                            <CiLocationOn className="text-[#1ecb15] text-2xl" />
                            {data.BranchAddress}
                        </p>
                        <p className="mt-2 text-gray-600 flex gap-2">
                            <FaPhoneAlt className="text-[#1ecb15] text-xl" />
                            {data.phone}
                        </p>
                        <p className="mt-2 text-[#1ecb15] pb-5 flex gap-2">
                            <MdOutlineMail className="text-[#1ecb15] text-xl" />
                            <a href={`mailto:${data.Email}`} className="text-[#1ecb15]">{data.Email}</a>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurBranch;
