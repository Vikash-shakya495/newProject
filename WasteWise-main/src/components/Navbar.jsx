import React, { useState } from 'react'
import Logo from '../assets/Vector.png'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#E1EED0] z-50 shadow-md p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-[#9DCD4F]'>
          <img src={Logo} alt="logo" className='h-10' />
          <p className='ml-2 text-3xl sm:text-4xl md:text-5xl'><span className='font-bold'>Waste</span>Wise</p>
        </div>
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} className='text-3xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className='hidden md:flex mt-2 text-xl sm:text-2xl md:text-3xl'>
          <div className='ml-5 mr-5'>Home</div>
          <div className='ml-5 mr-5'>Our Services</div>
          <div className='ml-5 mr-5'>Blog</div>
          <div className='ml-5 mr-5'>About Us</div>
          <div className='ml-5 mr-5'>Contact Us</div>
          <div className='ml-5 mr-5'><FaSearch /></div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4 flex flex-col text-xl'>
          <div className='py-2'>Home</div>
          <div className='py-2'>Our Services</div>
          <div className='py-2'>Blog</div>
          <div className='py-2'>About Us</div>
          <div className='py-2'>Contact Us</div>
          <div className='py-2'><FaSearch /></div>
        </div>
      )}
    </div>
  )
}

export default Navbar
