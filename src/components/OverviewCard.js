import React from 'react';

const OverviewCard = ({ title, value, description, percentageChange, icon, color }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg p-6 text-white transform transition-transform duration-300 hover:scale-105 ${color}`}
    >
      {/* Icon with Circle Background */}
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 text-white">
          {icon}
        </div>
      </div>
      
      {/* Title and Value */}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
      
      {/* Description */}
      <p className="text-sm opacity-80 mt-2">{description}</p>

      {/* Percentage Change */}
      <div className="mt-4">
        <span className={`font-semibold ${percentageChange.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
          {percentageChange}
        </span>{' '}
        {percentageChange.startsWith('-') ? 'Decrease' : 'Increase'}
      </div>
    </div>
  );
};

export default OverviewCard;
