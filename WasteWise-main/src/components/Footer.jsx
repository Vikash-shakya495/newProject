import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-black py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-around'>
        <div className='flex justify-center lg:justify-start space-x-6 mb-10 lg:mb-0'>
          <div className='bg-[#E1EED0] rounded-full h-12 w-12 flex items-center justify-center'><FaFacebookF /></div>
          <div className='bg-[#E1EED0] rounded-full h-12 w-12 flex items-center justify-center'><SiInstagram /></div>
          <div className='bg-[#E1EED0] rounded-full h-12 w-12 flex items-center justify-center'><FaTwitter /></div>
        </div>
        <div className='text-white text-center lg:text-left mb-10 lg:mb-0'>
          <p className='font-bold text-2xl mb-5'>SERVICES</p>
          <ul className='space-y-2'>
            <li>Waste Management</li>
            <li>E-waste EPR</li>
            <li>Plastic waste EPR</li>
            <li>Battery waste EPR</li>
            <li>Tyre waste EPR</li>
            <li>Recycler Registration</li>
            <li>CGWA NOC</li>
            <li>UPGWD NOC</li>
            <li>HWRA NOC</li>
            <li>BIS, WPC, ISO</li>
          </ul>
        </div>
        <div className='text-white text-center lg:text-left'>
          <p className='font-bold text-2xl mb-5'>CONTACT US</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
