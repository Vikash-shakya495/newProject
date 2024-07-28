// src/components/Header.js
import React from 'react';
import { AiFillEnvironment } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-green-50 p-4 flex justify-between items-center">
        
      <div className="text-lg font-bold flex items-center gap-8"> <div><AiFillEnvironment /></div> <div className='flex flex-col'>Bandra East, Mumbai <a href="#" className="text-blue-500 underline">Change address</a></div></div>
      <div className="flex items-center">
        <span className="material-icons mr-4">notifications</span>
        <div className="bg-purple-500 text-white p-2 rounded-full">5</div>
      </div>
    </div>
  );
};

export default Header;
