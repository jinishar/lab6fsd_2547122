// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="./About.jsx" className="hover:text-blue-500 transition">About</a>
        </nav>

        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          🐾 Dog World
        </h1>

        {/* Right Nav */}
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="./BreedCard.jsx" className="hover:text-blue-500 transition">Gallery</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
