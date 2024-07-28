// src/components/AvailableTrucks.js
import React from 'react';
import { FaTruck } from "react-icons/fa";

const AvailableTrucks = () => {
  const trucks = [
    { id: 1, license: 'MH01 HG 1932', driver: 'Suraj Chaturvedi' },
    { id: 2, license: 'MH01 HG 1933', driver: 'Raj Thakur' },
    { id: 3, license: 'MH01 HG 1934', driver: 'Vinod Segal' },
    { id: 4, license: 'MH01 HG 1935', driver: 'Sunil Kumar' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md col-span-1">
      <h2 className="font-bold mb-4">Following Trucks are available at <a href="#" className="text-blue-500 underline">Bandra West</a> today</h2>
      <ul>
        {trucks.map(truck => (
            <li key={truck.id} className="mb-2 flex justify-between items-center">
              <FaTruck />
              <div>
            <p>{truck.license}</p>
            <p>{truck.driver}</p>
            </div>
            <button className="bg-purple-500 text-white p-2 rounded">Request Pickup</button>
          </li>
        ))}
      </ul>
      <p className="text-xs mt-4">
        Please note that, once requested, the next pick-up would be available only after a period of 24 hours.
      </p>
    </div>
  );
};

export default AvailableTrucks;
