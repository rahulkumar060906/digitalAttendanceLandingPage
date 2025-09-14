import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">Digital Attendance</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#comparison" className="text-gray-700 hover:text-blue-600 transition-colors">Comparison</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#comparison" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Comparison
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors w-full"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;