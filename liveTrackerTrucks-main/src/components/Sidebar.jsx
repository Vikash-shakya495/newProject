// src/components/Sidebar.js
import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { GrResources } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdSupportAgent } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="bg-green-100 w-1/5 h-screen p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8 flex items-center">
        <span>WasteWise</span>
      </div>
      <ul>
        <li className="mb-4"><a href="#" className=" p-2 bg-purple-200 rounded flex items-center gap-5"><BiSolidDashboard /> Dashboard</a></li>
        <li className="mb-4"><a href="#" className=" p-2 bg-purple-500 text-white rounded flex items-center gap-5"><AiTwotoneSchedule /> Scheduling</a></li>
        <li className="mb-4"><a href="#" className=" p-2 bg-purple-200 rounded flex items-center gap-5"><GrResources /> Education Resources</a></li>
        <li className="mb-4"><a href="#" className=" p-2 bg-purple-200 rounded flex items-center gap-5"><CgProfile /> Profile</a></li>
      </ul>
      <div className="mt-auto">
        <button className="w-full p-2 bg-gray-200 rounded flex items-center gap-5"><MdSupportAgent /> Support</button>
        <button className="w-full p-2 bg-gray-200 rounded mt-2 flex items-center gap-5"><FiLogOut /> Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
