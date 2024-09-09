import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose, AiOutlineBell, AiOutlineDown } from "react-icons/ai";
import img from '../assets/1.jpg'
import profile from "./UserCard";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add logic to filter content based on searchTerm
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white-900 via-gray-800 to-gray-700 text-black shadow-md p-2 md:p-4 flex flex-col md:flex-row items-center justify-between transition-colors duration-300">
      <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-0">Dashboard</h1>
      
      {/* Search Bar */}
      <div className="relative flex items-center bg-white text-gray-800 px-2 py-1 rounded-lg shadow-md w-full md:w-auto">
        <AiOutlineSearch className="text-gray-600 text-lg" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="ml-1 bg-transparent outline-none placeholder-gray-500 flex-grow py-1 text-sm md:text-base"
          placeholder="Search..."
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-2 text-gray-500 hover:text-gray-700 transition-colors text-lg"
          >
            <AiOutlineClose />
          </button>
        )}
      </div>
      
      {/* User Profile and Notification Bell */}
      <div className="flex items-center mt-2 md:mt-0 space-x-3 relative">
        <div
          onClick={toggleMenu}
          className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
        >
          <img
            src={img} // Replace with actual profile picture URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-sm md:text-base">Jane Doe</span>
        <AiOutlineDown className="text-lg md:text-xl cursor-pointer" onClick={toggleMenu} />

        {/* User Menu */}
        {menuOpen && (
          <div
            className="absolute top-10 right-0 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-300 w-40 mt-2"
            onClick={closeMenu}
          >
            <a href="/profile" className="block px-3 py-1 hover:bg-gray-100 text-sm md:text-base">Profile</a>
            <a href="/settings" className="block px-3 py-1 hover:bg-gray-100 text-sm md:text-base">Settings</a>
            <a href="/logout" className="block px-3 py-1 hover:bg-gray-100 text-sm md:text-base">Logout</a>
          </div>
        )}

        <div className="relative">
          <AiOutlineBell className="text-lg md:text-xl cursor-pointer text-yellow-400" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1 py-0.5">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
