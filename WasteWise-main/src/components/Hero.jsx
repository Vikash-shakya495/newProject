import React from 'react'
import Background from "../assets/hero.webp"

function Hero() {
  return (
    <div className="flex justify-center items-top w-full h-[93vh] p-4 md:p-9 md:pt-10 mt-20">
      <div className="relative bg-no-repeat bg-center bg-cover h-[60vh] sm:h-[70vh] md:h-[80vh] w-full rounded border-none flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center p-2 sm:p-3 md:p-4 relative">Your Partner in Sustainable</h1>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center p-2 sm:p-3 md:p-4 relative">Waste Disposal</h1>
        <a href="#">
          <div className='relative bg-[#133700] text-white text-center font-bold rounded-full w-40 sm:w-48 md:w-60 h-16 sm:h-18 md:h-20 pt-3 sm:pt-4 md:pt-5 text-xl sm:text-2xl md:text-3xl shadow-lg'>Read More</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
