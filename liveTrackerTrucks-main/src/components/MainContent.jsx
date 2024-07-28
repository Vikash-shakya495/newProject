// src/components/MainContent.js
import React from 'react';
import CalendarComponent from './Calendar';
import AvailableTrucks from './AvailableTrucks';
import LiveTrackMap from './LiveTrackMap';

const MainContent = () => {
  return (
    <div className="p-4 flex-grow">
      <div className="grid grid-cols-3 gap-4">
        <CalendarComponent />
        <AvailableTrucks />
        <LiveTrackMap />
      </div>
    </div>
  );
};

export default MainContent;
