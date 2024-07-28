import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import One from "../assets/OurServices/1img.jpeg"
import Two from "../assets/OurServices/2img.jpeg"
import Three from "../assets/OurServices/3img.jpeg"
import Four from "../assets/OurServices/4img.jpeg"
import Five from "../assets/OurServices/5img.jpeg"
import Six from "../assets/OurServices/6img.jpeg"

function OurServices() {
  return (
    <div className="p-4">
      <div className="flex justify-center w-full font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
        Ou <span className="underline decoration-gray-400">r Servic</span> es
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { img: One, title: "Waste Management" },
          { img: Two, title: "E-waste EPR" },
          { img: Three, title: "Plastic waste EPR" },
          { img: Four, title: "Battery waste EPR" },
          { img: Five, title: "Tyre waste EPR" },
          { img: Six, title: "Recycler Registration" }
        ].map((service, index) => (
          <a href="#" key={index} className="shadow-lg bg-black-900 rounded-lg overflow-hidden">
            <img className="w-full h-48 sm:h-64 object-cover" src={service.img} alt={service.title} />
            <div className="bg-green-300 p-4 rounded-b-lg">
              <p className='font-bold text-xl sm:text-2xl'>{service.title}</p>
              <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
            </div>
          </a>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <div className='font-bold text-xl sm:text-2xl md:text-3xl'>More</div>
        <div className='flex justify-center items-center ml-3'><FaArrowRight /></div>
      </div>
    </div>
  )
}

export default OurServices
