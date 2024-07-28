import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Eight from "../assets/Testimonials/8img.jpeg";

function Testimonials() {
  const testimonials = [
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
    { text: "I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!", name: "John Doe", img: Eight },
  ];

  return (
    <div className='mt-10 p-4'>
      <div className="flex justify-center w-full font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
        Te <span className="underline decoration-gray-400">stimonia</span>ls
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {testimonials.map((testimonial, index) => (
          <a href="#" key={index} className="drop-shadow-lg bg-black-900 rounded-lg overflow-hidden relative flex flex-col items-center">
            <img className="object-cover w-40 h-40 rounded-full bg-white p-2 mt-5" src={testimonial.img} alt="Testimonial" />
            <div className='bg-[#E1EED0] p-5 w-full flex flex-col items-center mt-10 rounded-lg'>
              <p className='text-center text-sm'>{testimonial.text}</p>
              <p className='text-center text-xl sm:text-2xl md:text-3xl mt-5'>{testimonial.name}</p>
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

export default Testimonials;
