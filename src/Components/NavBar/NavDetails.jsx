import React from 'react';
import { FaFacebookF, FaTwitter ,FaLinkedinIn  } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function NavDetails() {
  return (
    <div className=" hidden md:flex md:w-full h-10 bg-[#222733] pt-2 pl-16">
       {/* <div className="hidden md:flex w-full h-auto bg-[#222733] py-2 md:py-1 md:pl-16"></div> */}
      <div className="md:px-10 px-4 py-1 flex justify-between items-center">
        <div className="text-[#ffffff] md:text-base text-sm space-x-1 flex items-center gap-2 cursor-pointer justify-between">
          <FaPhone className="text-[#ffffff]" />
          <h1 className="font-bold text-xs">01-5971616</h1>
          <div className="flex items-center gap-2">
            <IoIosMail className='text-[#ffffff] text-2xl' />
            <h1 className='text-sm font-bold'>info@sparkcar.org</h1>
          </div>
        </div>
        <div className="flex md:pl-[700px] md:pr-24 items-center space-x-2 text-lg gap-3 cursor-pointer">
          <FaFacebookF className="text-xl text-[#ffffff]" />
          <FaTwitter className="text-xl text-[#ffffff]" />
          <TiSocialYoutubeCircular className="text-2xl text-[#ffffff]" />
          <FaLinkedinIn className="text-xl text-[#ffffff]" />
        </div>
      </div>
    </div>
  );
}

export default NavDetails;
