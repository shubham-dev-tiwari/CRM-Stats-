import React from 'react';

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const timeOptions = ['Last Week', 'Last Month', 'Last Year'];

  return (
    <div className="mb-6">
      <label className="block text-white font-semibold mb-2">Select Time Range:</label>
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="p-2 rounded-lg shadow-md bg-white text-gray-700"
      >
        {timeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
