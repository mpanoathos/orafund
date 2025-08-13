import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-white via-blue-50 to-white bg-opacity-90 shadow-2xl border-b border-blue-100 backdrop-blur-lg z-50 rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Branding/Logo */}
        <div className="flex items-center space-x-2">
          {/* Optional: Logo (replace src with your logo if available) */}
          {/* <img src="/logo192.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text tracking-wide drop-shadow">Oriri Africa Fund</span>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Navigation Links (desktop) */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm">Home</a>
          </li>
          {/* <li>
            <a href="#about" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm">About</a>
          </li> */}
          <li>
            <a href="#challenges" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm">Challenge</a>
          </li>
          <li>
            <a href="#products" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm">Solution</a>
          </li>
          <li>
            <a href="#contact" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm">Contact</a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white bg-opacity-95 shadow-lg">
          <li>
            <a href="#home" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#services" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#contact" className="px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-200 shadow-sm" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;