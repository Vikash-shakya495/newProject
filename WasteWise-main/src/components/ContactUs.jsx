import React from 'react';
import Background from "../assets/ContactUs/Background.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";

function ContactUs() {
  return (
    <div className="m-4 md:m-10 lg:m-20 bg-[#E1EED0] flex flex-col lg:flex-row h-auto lg:h-[80vh] relative overflow-hidden shadow-lg rounded">
      <div className="p-4 lg:pt-10 lg:pl-10 lg:w-2/3 w-full">
        <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl'>Say Hi!</h1>
        <p className='text-lg md:text-xl lg:text-2xl mt-2 lg:mt-5'>We'd like to talk with you.</p>
        <div className='mt-5 lg:mt-20'>
          <label htmlFor="name">My Name is</label><br />
          <input className='shadow-lg w-full lg:w-[50vh] xl:w-[60vh] p-2 rounded mt-2' type="text" placeholder='Full Name' id='name'/>   
        </div>
        <div className='mt-5 lg:mt-10'>
          <label htmlFor="lookingFor">I'm looking for</label><br />
          <input className='shadow-lg p-2 w-full lg:w-[50vh] xl:w-[60vh] rounded mt-2' type="text" placeholder='What you have' id='lookingFor'/>   
        </div>
        <div className='mt-5 lg:mt-10'>
          <label htmlFor="message">Your message</label><br />
          <textarea className='shadow-lg w-full lg:w-[50vh] xl:w-[60vh] h-[10vh] lg:h-[15vh] p-2 rounded mt-2' placeholder='I want to say that' id='message'/>   
        </div>
      </div>
      <div 
        className="relative h-auto lg:h-full w-full lg:w-1/2 text-left bg-cover bg-right p-4 md:p-10 lg:pl-40 lg:pt-40 text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="bg-opacity-80 p-4 rounded">
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl mb-4 lg:mb-10'>Contact Information</h1>
          <p className='text-lg md:text-xl lg:text-2xl'>Fill up the form and our Team will get back to </p>
          <p className='text-lg md:text-xl lg:text-2xl mb-4 lg:mb-10'>you within 24 hours.</p>
          <div className='text-center'>
            <p>(+40)772 100 200</p>
            <p>hello@creative-tim.com</p>
            <p>Dynonisie Wolf Bucharest, RO 010458</p>
          </div>
          <div className='flex justify-center lg:justify-start mt-4 lg:mt-10 text-3xl md:text-4xl lg:text-6xl'>
            <AiOutlineFacebook className="mx-2" />
            <CiLinkedin className="mx-2" />
            <TfiYoutube className="mx-2" />
          </div>
        </div>
        <div className='lg:hidden flex justify-center mt-10'>
          <a href="#">
            <div className='shadow-lg bg-[#133700] text-white rounded-full p-3 w-40 md:w-48 lg:w-60 text-center text-lg md:text-xl lg:text-2xl'>
              Send Message
            </div>
          </a>
        </div>
      </div>
      <div className='hidden lg:flex justify-center absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <a href="#">
          <div className='shadow-lg bg-[#133700] text-white rounded-full p-3 w-40 md:w-48 lg:w-60 text-center text-lg md:text-xl lg:text-2xl'>
            Send Message
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
