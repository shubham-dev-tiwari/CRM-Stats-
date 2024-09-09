import React from 'react';
import avatar from '../assets/1.jpg'

const UserCard = ({ name, balance }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <img src={avatar} alt="User Avatar" className="rounded-full w-16 h-16" />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <div className="text-xl text-gray-800 font-semibold mt-2">{balance}</div>
    </div>
  );
};

export default UserCard;
