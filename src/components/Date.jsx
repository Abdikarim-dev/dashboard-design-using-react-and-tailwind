import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomInput({ value, onClick }) {
  // Convert the date string back to a Date object
  const date = value ? new Date(value) : new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;

  return <input type="text" className="border border-[#E4E4E7] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onClick={onClick} value={formattedDate} readOnly />;
}

function CustomDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
      className=''
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
      />
    </div>
  );
}

export default CustomDate;