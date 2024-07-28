// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded shadow-md col-span-1">
      <h2 className="font-bold mb-4">Available Slots</h2>
      <Calendar onChange={setDate} value={date} />
      <div className="mt-4">
        Selected Date: {date.toDateString()}
      </div>
    </div>
  );
};

export default CalendarComponent;
